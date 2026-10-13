import { readdir, readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { openSync } from 'fontkit';

const root = fileURLToPath(new URL('../', import.meta.url));
const sourceRoot = join(root, 'src');
const sourceExtensions = new Set(['.astro', '.css', '.ts']);
const fontPaths = [
  'public/fonts/noto/noto-serif-sc-site.woff2',
  'public/fonts/noto/noto-sans-sc-site.woff2',
];

const sourceFiles = [];

async function collectSourceFiles(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      await collectSourceFiles(path);
    } else if (sourceExtensions.has(extname(entry.name))) {
      sourceFiles.push(path);
    }
  }
}

await collectSourceFiles(sourceRoot);

const sourceText = (
  await Promise.all(sourceFiles.map((path) => readFile(path, 'utf8')))
).join('');
const requiredCodePoints = new Set(
  [...sourceText]
    .filter((character) => !/^\s$/u.test(character))
    .map((character) => character.codePointAt(0)),
);

let hasMissingGlyphs = false;

for (const relativePath of fontPaths) {
  const font = openSync(join(root, relativePath));
  const availableCodePoints = new Set(font.characterSet);
  const missing = [...requiredCodePoints].filter(
    (codePoint) => !availableCodePoints.has(codePoint),
  );

  if (missing.length > 0) {
    hasMissingGlyphs = true;
    const characters = missing.map((codePoint) => String.fromCodePoint(codePoint));
    console.error(`${relativePath} is missing ${missing.length} characters: ${characters.join('')}`);
  } else {
    console.log(`${relativePath} covers all current site text.`);
  }
}

if (hasMissingGlyphs) {
  console.error('The committed site fonts do not cover every character in the source.');
  process.exitCode = 1;
}

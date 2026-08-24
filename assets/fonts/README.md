# Bundled fonts

- `Noto/`: Noto Serif SC and Noto Sans SC, licensed under the SIL Open Font License 1.1. The `*-VF.ttf` files are the upstream variable fonts; the fixed Light/Regular/Bold files are project-local instances generated from them for XeTeX compatibility.
- `Libertinus/`: Libertinus Serif and Sans, licensed under the SIL Open Font License 1.1.
- `MadokaRunes/`: decorative rune font used only for short visual echoes. See its local project-use notice.

The font files are committed so XeLaTeX produces the same line and page breaks locally and in CI.

From this directory, the fixed Noto instances can be regenerated with fontTools:

```powershell
fonttools varLib.instancer Noto/NotoSerifSC-VF.ttf wght=300 --update-name-table --output Noto/NotoSerifSC-Light.ttf
fonttools varLib.instancer Noto/NotoSerifSC-VF.ttf wght=400 --update-name-table --output Noto/NotoSerifSC-Regular.ttf
fonttools varLib.instancer Noto/NotoSerifSC-VF.ttf wght=700 --update-name-table --output Noto/NotoSerifSC-Bold.ttf
fonttools varLib.instancer Noto/NotoSansSC-VF.ttf wght=400 --update-name-table --output Noto/NotoSansSC-Regular.ttf
fonttools varLib.instancer Noto/NotoSansSC-VF.ttf wght=700 --update-name-table --output Noto/NotoSansSC-Bold.ttf
```

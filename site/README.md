# 网站

在 `site/` 中构建：

```bash
npm install
npm run dev
npm run build
npm run preview
```

`npm run build` 会先检查字体覆盖，再生成静态页面。GitHub Actions 在生产构建时设置 `PUBLIC_SITE_URL` 和 `PUBLIC_BASE_PATH`。本地不设置这两项时，站点从 `/` 提供。

全书 PDF 不进版本库。推送到 `main` 时，Actions 编译 `main.tex`，并把 `build/main.pdf` 复制为 `public/downloads/main.pdf`。本地要打开「阅读全文」，把该文件复制到同一路径。

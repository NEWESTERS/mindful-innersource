# API Extractor

При запуске сборки `pnpm build` типы сохраняются во временную директорию `temp`, а потом преобразуются в единый `.d.ts` файл с помощью [@microsoft/api-extractor](https://api-extractor.com)

Во время сборки из `jsdoc` и типов генерируются метаданные, из которых можно автоматически сгенерировать документацию с помощью [api-documenter](https://api-extractor.com/pages/commands/api-documenter_markdown/): `pnpm run docs`

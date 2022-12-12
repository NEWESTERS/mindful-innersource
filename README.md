# Заботливый иннерсорс

Репозиторий с материалами к докладу

## Ссылки

Мой телеграм-канал про JavaScript: <https://t.me/hacknote_js>

### Установка зависимостей

- [peerDependencies](https://nodejs.org/es/blog/npm/peer-dependencies/)
- [Фантомные зависимости](https://rushjs.io/pages/advanced/phantom_deps/)
  - [import/no-extraneous-dependencies](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-extraneous-dependencies.md)
  - [pnpm vs npm](https://pnpm.io/pnpm-vs-npm)
- [optionalDependencies](https://betterprogramming.pub/what-are-npms-optional-dependencies-and-when-should-we-use-them-796a6a964e73)

### Версионирование

- [Semver](https://semver.org)
- [@changesets/cli](https://www.npmjs.com/package/@changesets/cli)
- [Материалы по версионированию](https://lfx.rushstack.io/pages/concepts/version_conflicts/)

### Сборка

- [Бандлер не нужен](https://cmdcolin.github.io/posts/2022-05-27-youmaynotneedabundler)
- [SWC](https://swc.rs)
- [@rushstack/heft](https://rushstack.io/pages/heft/overview/)

### Dead code elimination

- [Webpack tree shaking](https://webpack.js.org/guides/tree-shaking/)
- [ESM Static module structure](https://exploringjs.com/es6/ch_modules.html#static-module-structure)
- [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react#pure)
- ["sideEffects"](https://webpack.js.org/configuration/optimization/#optimizationsideeffects)
- [Переход на ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
- [Экспериментальная поддержка ESM в Jest](https://github.com/facebook/jest/blob/64de4d7361367fd711a231d25c37f3be89564264/docs/ECMAScriptModules.md)

### API пакета

- [Exports в package.json](https://habr.com/ru/company/space307/blog/546240/)
- ["exports" proposal](https://github.com/jkrems/proposal-pkg-exports/)
- [Typescript "typesVersions"](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#version-selection-with-typesversions)
- [@rushstack/eslint-plugin-packlets](https://github.com/microsoft/rushstack/blob/main/eslint/eslint-plugin-packlets/README.md)

### Документация и типизация

- [jsdoc](https://jsdoc.app)
- [tsdoc](https://tsdoc.org)
- [Storybook](https://storybook.js.org)
- [@storybook/addon-storyshots](https://storybook.js.org/addons/@storybook/addon-storyshots)
- [@microsoft/api-extractor](https://api-extractor.com)

## Примеры

Для запуска большинства примеров потребуется установить [PNPM](https://pnpm.io):

```bash
npm i -g pnpm
```

- [Моя монорепа с библиотеками](https://github.com/NEWESTERS/lndsld)
- [Фантомные зависимости](./examples/phantom-dependencies/README.md)
- [Отсутствие peerDependencies](./examples/non-peer-deps/README.md)
- [Некорректные peerDependencies](./examples/incorrect-peer-deps/README.md)
- [Tree shaking](./examples/tree-shaking/README.md)
- [Генерация ченджлогов](./examples/changelogs/README.md)
- [Билд система Heft](./examples/heft/README.md)
- [API Extractor](./examples/api-extractor/README.md)
- [Type references](./examples/type-references/README.md)
- [Typescript Module Augmentation](./examples/sc-theme-override/README.md)
- [Несколько энтрипоинтов у одного пакета](./examples/multiple-entrypoints/README.md)

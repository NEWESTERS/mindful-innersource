# Несколько энтрипоинтов у одного пакета

Пакет `library` содержит некоторую функциональность и имеет обёртку в виде хука для использования этой функциональности в `react`

Фактически react функциональность для `react` можно вынести в отдельный пакет, но, чтобы не создавать слишком много пакетов, можно изолировать эту функциональность в рамках пакета с помощью `eslint` плагина [@rushstack/eslint-plugin-packlets](https://github.com/microsoft/rushstack/tree/main/eslint/eslint-plugin-packlets)

Чтобы хуки не мешали пользователям библиотеки, не использующим `react`, они импортируются из библиотеки по пути `library/react` с помощью полей [exports](https://github.com/jkrems/proposal-pkg-exports/) и [typesVersions](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#version-selection-with-typesversions) в [package.json](./library/package.json)

Также `react` указан как опциональная зависимость в [peerDependenciesMeta](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#peerdependenciesmeta), чтобы не требовать установить `react` у всех пользователей пакета, но при этом сохранить контроль над версией

## Что почитать

- [@rushstack/eslint-plugin-packlets](https://github.com/microsoft/rushstack/tree/main/eslint/eslint-plugin-packlets)
- [@rushstack/eslint-config](https://github.com/microsoft/rushstack/tree/main/eslint/eslint-config)
- ["exports" proposal](https://github.com/jkrems/proposal-pkg-exports/)
- [Typescript "typesVersions"](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#version-selection-with-typesversions)
- [peerDependenciesMeta](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#peerdependenciesmeta)

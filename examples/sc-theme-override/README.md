# Переопределение типа темы "styled-components"

Пакет `ui-kit` [переопределяет](./ui-kit/src/theme.ts) тип темы `styled-components`, как рекомендовано в [документации](https://styled-components.com/docs/api#create-a-declarations-file)

Модуль с переопределениями импортируется в [entrypoint библиотеки](./ui-kit/src/index.ts), что приводит к тому, что переопределения срабатывают и во всех пакетах, импортирующих библиотеку и теперь `import { DefaultTheme } from 'styled-components'` берёт интерфейс темы из библиотеки компонентов

## Что почитать

- [Typescript Declaration Merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html)
- [Typescript Module Augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation)

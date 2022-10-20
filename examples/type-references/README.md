# Type references

Пакет `@innersource/config` содержит конфиг для `webpack`, который может превращать `.png` изображения в js модули

Чтобы другие пакеты, использующие этот конфиг, получили информацию о типах таких модулей, пакет `@innersource/config` содержит декларации этих типов, которые можно подключить

- в `tsconfig.json` с помощью поля `types`:

    ```json
    {
        "compilerOptions": {
            "types": ["@innersource/config"]
        }
    }
    ```

- в коде проекта с помощью [Triple-Slash Directives](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html):

    ```ts
    /// <reference types="@innersource/config" />
    ```

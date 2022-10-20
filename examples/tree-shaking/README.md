# Tree shaking

Пакет `app` собирается с помощью `webpack` и зависит от трёх библиотек с одинаковыми React компонентами:

- `cjs-lib` — библиотека в формате `CommonJS` с ["PURE" аннотациями](https://webpack.js.org/guides/tree-shaking/#mark-a-function-call-as-side-effect-free)
- `esm-lib` — библиотека в формате `ESM` __без__ "PURE" аннотаций
- `pure-esm-lib` — библиотека в формате `ESM` с "PURE" аннотациями

По результатам сборки пакета `app` можно заметить, что пакеты `cjs-lib` и `esm-lib` были включены в бандл целиком, а из `pure-esm-lib` в бандл попал только импортированный компонент

Воспроизведение: `./reproduce.sh`

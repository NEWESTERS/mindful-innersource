# Отсутствие peerDependencies

Пакет `lib1` зависит от `react@^17.0.0`

Пакет `app` зависит от пакета `lib1` и `react@^18.0.0`

В результате установка зависимостей и сборка проходят успешно, но в результате в бандл приложения попадут две копии `react` и приложение не будет работать

Воспроизведение: `./reproduce.sh`

## Что почитать

- [Документация Rush](https://rushjs.io/pages/advanced/npm_doppelgangers/)
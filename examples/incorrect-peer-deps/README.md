# Некорректные peerDependencies

Пакет `lib1` требует от пользователя `react@^17.0.0` в секции `peerDependencies`

Пакет `app` зависит от пакета `lib1` и `react@^18.0.0`

Пакетный менеджер обнаружит несоответствие версий и завершит установку с ошибкой

Воспроизведение: `./reproduce.sh`

## Что почитать

- [peerDependencies](https://nodejs.org/es/blog/npm/peer-dependencies/)

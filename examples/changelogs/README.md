# Генерация ченджлогов

Ченджлоги для этого проекта генерируются автоматически с помощью [changesets](https://github.com/changesets/changesets/blob/main/packages/cli/README.md)

Воспроизведение:

```bash
pnpm i

pnpm change # задокументировать изменения

pnpm release # поднять версию пакета и сгенерировать ченджлоги на основе накопленных изменений
```

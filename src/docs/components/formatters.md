---
title: Message components
---

# Formatters
Fastwa provides the [`@fastwa/builders`](https://github.com/fastwa/fastwa/tree/main/packages/builders) package, which contains a variety of utilities you can use when writing your application.

## How to format your messages
These functions format strings into all the different styles supported by Whatsapp.

| Function                | Returns               |
|-------------------------|-----------------------|
| `bold(string)`          | `*fastwa*`            |
| `italic(string)`        | `_fastwa_`            |
| `strikethrough(string)` | `~fastwa~`            |
| `monospace(string)`     | `    ```fastwa```   ` |

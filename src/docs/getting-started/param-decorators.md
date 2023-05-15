---
title: Param decorators
---

# Param decorators
Fastwa provides a set of useful **param decorators** that you can use together to handle all messages. Below is a list of the provided decorators and the plant objects they represent.

> **Note:** An ES2016 decorator is an expression which returns a function and can take a target, name and property descriptor as arguments. You apply it by prefixing the decorator with an @ character and placing this at the very top of what you are trying to decorate. Decorators can be defined for either a class, a method or a property.

|                            |                                                                               |
|----------------------------|-------------------------------------------------------------------------------|
| `@RemoteJid()`             | `msg.key.remoteJid`                                                           |
| `@Content()`               | Returns the content from any message type.                                    |
| `@Quoted()`                | `msg.message.extendedTextMessage?.contextInfo`                                |
| `@Message(param?: string)` | `msg[param]`                                                                  |
| `@Param(param?: string)`   | Returns [Dynamic Segment](/building-your-application/dynamic-commands) value. |
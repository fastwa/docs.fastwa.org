---
title: Param decorators
---

# Param decorators
Fastwa provides a set of useful **param decorators** that you can use together to handle all messages. Below is a list of the provided decorators and the plant objects they represent.

|                            |                                                                               |
|----------------------------|-------------------------------------------------------------------------------|
| `@RemoteJid()`             | `msg.key.remoteJid`                                                           |
| `@Content()`               | Returns the content from any message type.                                    |
| `@Quoted()`                | `msg.message.extendedTextMessage?.contextInfo`                                |
| `@Message(param?: string)` | `msg` / `msg[param]`                                                          |
| `@Param(param?: string)`   | Returns [Dynamic Segment](/building-your-application/dynamic-commands) value. |

Then, you can simply use it wherever it fits your requirements.

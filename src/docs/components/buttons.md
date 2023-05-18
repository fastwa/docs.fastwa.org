---
title: Message components
---

# Buttons
The first type of interactive component we'll cover creating is a Button.

## Building buttons
To create your buttons, use the `ButtonBuilder` class, defining a `displayText`.
```ts
const callMe = new ButtonBuilder()
  .setDisplayText('Call me!')
  .setPhoneNumber('+1 (234) 5678-901')
```

### Sending buttons
To send your buttons, create a template message and add the buttons as components. Then return in your `method`.
```ts
@Command('ping')
ping() {
  return new TemplateMessageBuilder()
    .addComponents(callMe)
}
```

## Replying to buttons
To add a button interact handler, you can use `@Button()` decorator.

```ts
@Button('button-id')
getReply() {
  return 'Button clicked!';
}
```

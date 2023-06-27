# Interacting

> **Note:** Use at your own discretion. Do not spam people with this.

This page will guide you through how to define and organize commands in your application.

## Creating Commands
There are multiple ways of responding to a message. The most common way of sending a reply is by returning it in your controller `method`. This method acknowledges the interaction and sends a new message in response.

```ts
@Controller()
export class AppController {
  @Command('ping')
  ping() {
    return 'Pong!';
  }
}
```

See how to create [Dynamic Commands](/building-your-application/dynamic-commands).

> **Good to know:** `remoteJid` must be in format `+19999999999@s.whatsapp.net`, for groups must be `123456789-123345@g.us`.

## Sending media
Sending media (video, stickers, images) is easier & more efficient than ever.

* You can specify a buffer, a local url or even a remote url.
* When specifying a media url, we never loads the entire buffer into memory; it even encrypts the media as a readable stream.
* To learn more about stickers, [read this page](/components/stickers).

```ts
return {
  image: { url: './cat.jpeg' },
  caption: "Look this cat",
}
```

## Reading messages

A set of message keys must be explicitly marked read now. In multi-device, you cannot mark an entire "chat" read as it were. This means you have to keep track of unread messages.

```ts
const key = {
  id: 'AHASHH123123AHGA',
  remoteJid: '1234-123@g.us',
  participant: '912121232@s.whatsapp.net'
}

// You can pass multiple keys to read multiple messages
await sock.readMessages([key])
```

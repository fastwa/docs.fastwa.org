# Stickers

## Converting images to sticker

```ts
@Command('/sticker')
async convertToSticker(@Quoted() quoted: proto.IMessage) {
  const sticker = await new StickerBuilder(quoted.imageMessage)
    .setAuthor('Natan')
    .setPack('fastwa')
    .setId('fastwa')
    .build();

  return { sticker };
}
```

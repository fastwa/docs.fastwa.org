# Stickers

## Converting images to sticker


```ts
@Command('/sticker')
async convertToSticker(@Quoted() quoted) {
  return new StickerBuilder(downloadableMessage)
    .setAuthor('@fastwa')
    .setPack('builders')
}
```

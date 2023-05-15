# Connection
The `main.ts` includes an async function, which will **connect to whatsapp** our application:

```ts
import { WAFactory } from '@fastwa/core';

async function connectToWhatsapp() {
  const app = await WAFactory.create(AppModule. {
    printQrInTerminal: true
  });

  await app.listen();
}

connectToWhatsapp();
```

## Saving and Restoring Sessions
> **Good to know:** You obviously don't want to keep scanning the QR code every time you want to connect. So, you can load the credentials to log back in.


# Connection
The `main.ts` includes an async function, which will **connect** our application:

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


```ts
import { 
  fetchLatestBaileysVersion, 
  useMultiFileAuthState 
} from '@adiwajshing/baileys';

async function connectToWhatsapp() {
  const { state, saveCreds } = await useMultiFileAuthState('./sessions');

  const app = await WAFactory.create(AppModule, {
    auth: state,
    printQRInTerminal: true,
    saveCreds
  });

  await app.listen();
}

connectToWhatsapp()
```

This function `useMultiFileAuthState()` save the auth state in a single folder.

> **Hint:** Caching makes the store faster to send/receive messages. e.g. You can use [node-cache](https://github.com/node-cache/node-cache) package to store retry counts of messages when decryption/encryption fails.
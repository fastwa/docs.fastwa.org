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

> **Hint:** Caching makes the store faster to send/receive messages. e.g. You can use [node-cache](https://github.com/node-cache/node-cache) package to store retry counts of messages when decryption/encryption fails.

## Saving and Restoring Sessions
You obviously don't want to keep scanning the QR code every time you want to connect. So, you can load the credentials to log back in.


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

## Saving Auth keys in Database


```ts
import { initAuthCreds } from "@whiskeysockets/baileys"

export async function useDatabaseAuthState(sessionId: string) {
  const creds = initAuthCreds();
  
  const state = {
    creds,
    keys: {
      async get<T extends keyof SignalDataTypeMap>(types: T, ids: string[]) {
        // Get session from database
        return Repository.findOne();
      },
      async set(data: SignalDataSet) {
        // Update or insert session in database
        Repository.upsert();
      }
    }
  }

  const saveCreds = () => Repository.save(creds)

  return {
    state,
    saveCreds
  }
}
```

> **Good to know:** `useDatabaseAuthState()` works similarly to [`useMultiFileAuthState()`](#saving-and-restoring-sessions), but instead of saving it in a JSON file, saves it in the database.
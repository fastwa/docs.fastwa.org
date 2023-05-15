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
} from '@whiskeysockets/baileys';

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
Saving keys in a database offers advantages in terms of organization, performance, security, scalability, and data integrity, making it a preferred choice for many developers and applications.

For example, this function provides session management for storing auth state in a database. It is designed to be used with [baileys](https://github.com/WhiskeySockets/Baileys) and offers functions to interact with the database for retrieving and storing session data.

```ts
import { initAuthCreds } from "@whiskeysockets/baileys"

export async function useDatabaseAuthState() {
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

> **Note:** The `useDatabaseAuthState()` function assumes the presence of a repository or database access layer that provides the necessary methods to interact with the database. You need to implement the specific database operations within the `get` and `set` functions, such as querying the database or using an ORM.

# Controllers
Controllers are responsible for handling incoming **messages** and returning **replies**. In order to create a basic controller, we use classes and **decorator**. Decorators associate classes with required metadata and enable Fastwa to map all interactions (tie interactions to the corresponding controllers).

Fastwa employs two **different** options for manipulating replies:

|                        |                                                                                                                                                                                                                                                                                                                 |
|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Standard (recommended) | Using this built-in method, when it returns a JavaScript primitive type (e.g., `string`), however, Fastwa will send just the value. This makes messages handling simple: just return the value, and Fastwa takes care of the rest.                                                                              |
| Platform-specific      | We can use the platform-specific (e.g., Baileys) **socket instance**, which can be injected using the `@WebSocket()` decorator. With this approach, you have the ability to use the native reply methods exposed by that object. For example, you can send a message using code like `this.sock.sendMessage()`. |

## Socket
Occasionally, you may want to have a direct access to the native, **platform-specific** socket instance. You can use the `@WebSocket()` decorator. Fastwa will automatically assign the socket instance to this property once it is ready to use.

```ts
@WebSocket()
sock: WASocket;
```

> **Note:** The `@WebSocket()` decorator is imported from the `@fastwa/common` package.

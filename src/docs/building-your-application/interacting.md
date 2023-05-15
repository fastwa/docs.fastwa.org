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

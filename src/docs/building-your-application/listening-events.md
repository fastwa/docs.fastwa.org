# Listening events

## Handling events
You can the `@On()` decorator to declare methods that will be executed whenever a event is triggered. It's that simple, when the event is triggered, the method is called:

```ts
@On('connection.update')
onConnectionUpdate({ qr }: Partial<ConnectionState>) {
  // Do something with qr
}
```

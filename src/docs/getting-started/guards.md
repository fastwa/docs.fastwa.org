# Guards
A guard is a class annotated with the `@Injectable()` decorator, which implements the `CanActivate` interface. 

Guards have a single responsibility. They determine whether a given request will be handled by the message handler or not, depending on certain conditions (like permissions, roles, ACLs, etc.) present at run-time.

## Author guard

```ts
@Injectable()
export class IsAuthorGuard implements CanActivate {
  canActivate(
    msg: proto.IWebMessageInfo, 
    socket: WASocket
  ): boolean | Promise<boolean> {
    return msg.key.fromMe;
  }
}
```

Every guard must implement a `canActivate()` function. This function should return a boolean, indicating whether the current message handler is allowed or not. It can return the response either synchronously or asynchronously (via a `Promise`). Fastwa uses the return value to control the next action:

* if it returns `true`, the message will be processed.
* if it returns `false`, Fastwa will deny the message.

## Binding guards
Guards are **method-scoped**. Below is an example of a method-scoped guard using the `@UseGuards()` decorator. This decorator may take a single argument, or a commma-separated list of arguments. This lets you easily apply the appropriate set of guards with one declaration.

```ts
@Command('ping')
@UseGuards(IsAuthorGuard)
ping() {
  return this.appService.getPing();
}
```

> **Good to know**: The `@UseGuards()` decorator is imported from `@fastwa/common` package.

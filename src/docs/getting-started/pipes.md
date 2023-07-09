# Pipes
A pipe is a class which implements the `PipeTransform` interface.

Pipes have two typical use cases:

* **transformation:** transform input data to the desired form (e.g., from string to integer)
* **validation:** evaluate input data and if valid, simply pass it through unchanged; otherwise, throw an exception

## The built-in ValidationPipe
The `ValidationPipe` is provided by Fastwa out-of-the-box. The built-in `ValidationPipe` offers more options than the sample we built in this chapter, which has been kept basic for the sake of illustrating the mechanics of a custom-built pipe. 

## Class validator
Let's look at an alternate implementation for our validation technique.

```ts
import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
```

> **Good to know:** Read more about the class-validator decorators [here](https://github.com/typestack/class-validator#usage).

## Global scoped pipes
We can realize it's full utility by setting it up as a **global-scoped** pipe so that it is applied to every command handler across the entire application.

```ts
async function bootstrap() {
  const { version } = await fetchLatestBaileysVersion();
  const { state, saveCreds } = await useMultiFileAuthState('./sessions');

  const app = await WAFactory.create(AppModule, {
    version,
    auth: state,
    printQRInTerminal: true,
    saveCreds
  });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen();
}
bootstrap();
```

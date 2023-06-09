# Schedule module
Fastwa provides [`@fastwa/schedule`](https://github.com/fastwa/fastwa/tree/main/packages/schedule) package, which integrates with the popular [cron](https://github.com/kelektiv/node-cron) package. That allows you to schedule arbitrary code (methods/functions) to execute at a fixed date/time, recurring intervals, or once after a specified interval.

## Installation
To begin using it, we first install required dependencies.

```bash
npm i --save @fastwa/schedule
npm i --save-dev @types/cron
```

## Getting started
Once the installation process is complete, to activate job scheduling, import `ScheduleModule` into the root `AppModule` and run the `forRoot()` static method as shown below:

```ts {2,5}
import { Module } from '@fastwa/common';
import { ScheduleModule } from '@fastwa/schedule';

@Module({
  imports: [ScheduleModule.forRoot()],
})
export class AppModule {}
```

## Declarative cron jobs
A cron job schedules an arbitrary function (method call) to run automatically. Cron jobs can run:

* Once, at a specified date/time.
* On a recurring basis; recurring jobs can run at a specified instant within a specified interval (for example, once per hour, once per week, once every 5 minutes)

Declare a cron job with the `@Cron()` decorator preceding the method definition containing the code to be executed, as follows:

```ts
import { Injectable } from '@fastwa/common';
import { Cron, CronExpression  } from '@fastwa/schedule';

@Injectable()
export class AppController {
  @Socket()
  socket: WASocket;
  
  @Cron(CronExpression.EVERY_5_MINUTES)
  handleCron() {
    this.socket.sendMessage(remoteJid, 'Send message every 5 minutes');
  }
}
```

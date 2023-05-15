# Dynamic Commands
When you don't know the exact segment names ahead of time and want to create command from dynamic data, you can use Dynamic Segments that are filled in at message time. 

## Convention
A Dynamic Segment can be created by prefixing the parameter name with a colon. For example, `:id` or `:name`. These dynamic segments act as variable that can be replaced with specific values during runtime.

To access the value of the parameter, you can use the [`@Param()`](/getting-started/param-decorators) decorator in the method handler signature (e.g., `findOne(@Param('id') id)`). 

## Example
For example, a bot include the following command `/say :text` where `:text` is the dynamic segment.

```ts
@Controller()
export class AppController {
  @Command('/say :text')
  async say(@Param('text') text: string) {
    return `What is ${text}?`;
  }
}
```

> **Note:** Dynamic Segments are equivalent to [Dynamic Commands](/building-your-application/interacting#dynamic-commands).

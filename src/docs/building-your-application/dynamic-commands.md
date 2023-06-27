# Dynamic Commands
When you don't know the exact segment names ahead of time and want to create command from dynamic data, you can use Dynamic Segments that are filled in at message time. 

## Convention
A Dynamic Command can be created by prefixing the parameter name with a colon. For example, `:id` or `:name`. These dynamic segments act as variable that can be replaced with specific values during runtime.

To access the value of the parameter, you can use the [`@Param()`](/getting-started/param-decorators) decorator in the method handler signature (e.g., `findOne(@Param('id') id)`). 


## Example
For example, a  command `/hello :name` where `:name` is the dynamic segment.

```ts
@Command('/hello :name')
async getHello(@Param('name') name: string) {
  return `Hello, ${name}.`;
}
```

| Command                | Example command      | `params`                     |
|------------------------|----------------------|------------------------------|
| `/register :name`      | `/register Natan`    | `{ name: 'Natan' }`          |
| `/register :name :age` | `/register Natan 18` | `{ name: 'Natan', age: 18 }` |

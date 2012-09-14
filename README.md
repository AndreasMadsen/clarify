#trace

> Remove nodecore related stack trace noice

## Installation

```sheel
npm install clarify
```

## Disclaimer

This has not yet been tested extensively!

## Example

The following script produce an error:

```JavaScript
require('clarify');

throw new Error("custom error");
```

Without the `trace` the error output is:

```
/Users/Andreas/Sites/node_modules/clarify/test.js:2
throw new Error("test");
      ^
Error: test
    at Object.<anonymous> (/Users/Andreas/Sites/node_modules/clarify/test.js:2:7)
    at Module._compile (module.js:449:26)
    at Object.Module._extensions..js (module.js:467:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Module.runMain (module.js:492:10)
    at process.startup.processNextTick.process._tickCallback (node.js:244:9)
```

With the `clarify` the error output is:

```
/Users/Andreas/Sites/node_modules/clarify/test.js:2
throw new Error("test");
      ^
Error: test
    at Object.<anonymous> (/Users/Andreas/Sites/node_modules/clarify/test.js:2:7)
```

## API documentation

To active require `clarify`.

```JavaScript
  require('clarify');
```

### Long stack traces

If you want super long stack traces use `trace`. Just make sure to put `clarify`
before `trace`.

```JavaScript
require('clarify');
require('trace');

var fs = require('fs');

// There is no limit for the size of the stack trace
Error.stackTraceLimit = Infinity;

setTimeout(function () {
  fs.readFile(__filename, function () {
    process.nextTick(function () {
      throw new Error("custom error");
    });
  });
}, 200);
```

throw the following output:

```
/Users/Andreas/Sites/node_modules/trace/test.js:14
      throw new Error("test");
            ^
Error: test
    at /Users/Andreas/Sites/node_modules/trace/test.js:14:13
    at /Users/Andreas/Sites/node_modules/trace/test.js:13:13
    at Object.<anonymous> (/Users/Andreas/Sites/node_modules/trace/test.js:12:6)
    at Object.<anonymous> (/Users/Andreas/Sites/node_modules/trace/test.js:11:1)
```

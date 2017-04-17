# clarify [![Build Status](https://secure.travis-ci.org/AndreasMadsen/clarify.png)](http://travis-ci.org/AndreasMadsen/clarify)

> Remove nodecore related stack trace noise

## Installation

```sheel
npm install clarify
```

## Example

The following script produce an error:

```JavaScript
require('clarify');

throw new Error("custom error");
```

Without `clarify` the error output is:

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

With `clarify` the error output is:

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

## License

**The software is license under "MIT"**

> Copyright (c) 2012 Andreas Madsen
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

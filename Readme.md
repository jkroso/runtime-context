
# runtime-context

  are we in development or production. designed to work in both the browser and node. In node it just exports `process.env.NODE_ENV` while in the browser it'll assume production unless either `localStorage.getItem('runtime-context')` has a value or the url is localhost:3000 - localhost:3999. This is because in certain browsers you don't have a good way to tell it otherwise and those certain browsers only ever get used in production anyway.

## Installation

_With [component](//github.com/component/component), [packin](//github.com/jkroso/packin) or [npm](//github.com/isaacs/npm)_  

	$ {package mananger} install jkroso/runtime-context

then in your app:

```js
var context = require('runtime-context')
```

## Running the tests

Just run `make`. It will install and start a development server leaving the tests waiting for you [at](http://localhost:3000/examples)

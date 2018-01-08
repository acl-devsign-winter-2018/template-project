Devsign Template Project
===

## Project Organization

### `src`

The source folder (`src`) contains the original source code that developers write as part of the app.

### `dist`

The distribution build folder (`dist`) contains the built files for a production build.

## Module Html

The current setup allows modular html by using the `${...}` JavaScript interpolator and a require of the 
other html file to include:

```html
<body>
  ${require('./app.html')}
</body>
```
 
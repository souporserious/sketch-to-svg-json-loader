## sketch-to-svg-json-loader

[![npm version](https://badge.fury.io/js/sketch-to-svg-json-loader.svg)](https://badge.fury.io/js/sketch-to-svg-json-loader)
[![Dependency Status](https://david-dm.org/souporserious/sketch-to-svg-json-loader.svg)](https://david-dm.org/souporserious/sketch-to-svg-json-loader)

Import Sketch files as SVG JSON data through Webpack.

Exports each Sketch artboard as a path.

```js
{
  search: 'M15.5 14h-.79l-.28-.27A6.471 6.471...'
}
```

Most artboard's should only contain one layer with a compound path. Multiple paths are supported and will result in an indexed key.

```js
{
  '${artboardName}-{layerIndex}': 'M15.5 14h-.79l-.28-.27A6.471 6.471...'
}
```

You can run the local example by pulling the repo and running `yarn` and then `yarn dev`. Please make sure you have [Yarn](https://yarnpkg.com/en/docs/getting-started) prior to installing.

## Todo

- add ability to pass options

- write tests

- better docs

## Install

`yarn add sketch-to-svg-json-loader --dev`

`npm install sketch-to-svg-json-loader --save-dev`

### Webpack 2 Configuration

**webpack.config.js**
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.sketch$/,
        use: 'sketch-to-svg-json-loader'
      }
    ]
  }
}
```

**React Example**
```js
import icons from 'icons.sketch'

function SearchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d={icons.search} />
    </svg>
  )
}
```

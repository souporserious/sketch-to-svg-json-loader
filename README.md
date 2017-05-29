## sketch-to-svg-json-loader

[![npm version](https://badge.fury.io/js/sketch-to-svg-json-loader.svg)](https://badge.fury.io/js/sketch-to-svg-json-loader)
[![Dependency Status](https://david-dm.org/souporserious/sketch-to-svg-json-loader.svg)](https://david-dm.org/souporserious/sketch-to-svg-json-loader)

Import Sketch files as SVG JSON data through Webpack. Inspired by [@david.gilbertson](https://medium.com/@david.gilbertson)'s wonderful article on [icons as react components](https://medium.com/@david.gilbertson/icons-as-react-components-de3e33cb8792).

## Install

`yarn add sketch-to-svg-json-loader --dev`

`npm install sketch-to-svg-json-loader --save-dev`

## Usage

Exports each Sketch artboard as a path.

```js
{
  'search': 'M15.5 14h-.79l-.28-.27A6.471 6.471...'
}
```

Most artboards should only contain one layer with a compound path. However, multiple paths are supported and will result in an indexed key like the following:

```js
{
  'search-0': 'M3 5h2V3c-1.1...',
  'search-1': 'M9 9h6v6H9z...'
}
```

You can run the local example by pulling the repo and running `yarn` and then `yarn dev`. Please make sure you have [Yarn](https://yarnpkg.com/en/docs/getting-started) prior to installing. If for some reason this loader does not work please file an issue and I will get to it as soon as possible 😇

### Webpack Configuration

**webpack 2**
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

**webpack 1**
```js
module.exports = {
  module: {
    loaders: [
      {
        test: /\.sketch$/,
        loader: 'sketch-to-svg-json-loader'
      }
    ]
  }
}
```

## Example React Component
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

## Todo

- add ability to pass options

- better way to handle illustrations and more complex icons

- write tests

- better docs

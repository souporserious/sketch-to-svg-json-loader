import React, { Component, createElement } from 'react'
import ReactDOM, { render } from 'react-dom'
import icons from './icons.sketch'

console.log(icons)

class App extends Component {
  render() {
    return (
      <div>
        <h2>Search</h2>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d={icons.search} />
        </svg>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))

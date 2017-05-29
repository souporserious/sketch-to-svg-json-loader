import React, { Component, createElement } from 'react'
import ReactDOM, { render } from 'react-dom'
import icons from './icons.sketch'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Search</h2>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d={icons.search} />
          </svg>
        </div>

        <div>
          <h2>Information</h2>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d={icons.information} />
          </svg>
        </div>

        <div>
          <h2>Close</h2>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d={icons.close} />
          </svg>
        </div>

        <div>
          <h2>Mulit-Color</h2>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d={icons['duo-0']} fill="red" />
            <path d={icons['duo-1']} fill="green" />
          </svg>
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))

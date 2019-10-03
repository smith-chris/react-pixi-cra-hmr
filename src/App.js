import { setConfig } from 'react-hot-loader'
import { hot } from 'react-hot-loader/root'
import React from 'react'
import logo from './logo.svg'
import './App.css'
import { AutoCounter } from './AutoCounter'
// Not really sure what that does but fixes a warning
setConfig({ trackTailUpdates: false })

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <AutoCounter />
      </header>
    </div>
  )
}

export default hot(App)

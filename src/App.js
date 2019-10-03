import { setConfig } from 'react-hot-loader'
import { hot } from 'react-hot-loader/root'
import React from 'react'
import logo from './logo.svg'
import './App.css'
import { AutoCounter } from './AutoCounter'
import { HookCounter } from './HookCounter'
import { Stage } from '@inlet/react-pixi'
import { Rectangle } from './Rectangle'
import { RotatingRectangle } from './RotatingRectangle'
import { Rectangles } from './Reactangles'
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
        <HookCounter />
        <Stage width={300} height={300}>
          {/* <Rectangle x={0} y={0} width={100} height={100} />
          <RotatingRectangle x={150} y={150} width={100} height={100} />
          <Rectangle x={200} y={200} width={100} height={100} /> */}
          <Rectangles />
        </Stage>
      </header>
    </div>
  )
}

export default hot(App)
// export default App

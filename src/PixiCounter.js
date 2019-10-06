import React, { Component } from 'react'
import { Text } from '@inlet/react-pixi'
// import { hot } from 'react-hot-loader/root'

export class PixiCounter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  componentDidMount() {
    this.interval = window.setInterval(
      () => this.setState(prevState => ({ count: prevState.count + 1 })),
      200
    )
  }

  generateString1() {
    // Editing this should not affect this.state.count while HMR
    return '1'
  }

  generateString2 = () => {
    return '2'
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <Text
        anchor={0.5}
        x={200}
        y={50}
        tint={0xababab}
        text={`${
          this.state.count
        } - ${this.generateString1()} - ${this.generateString2()}`}
      />
    )
  }
}

// Just comment out this line & rhl import, and HMR won't work properly
// export const PixiCounterHot = hot(PixiCounter)

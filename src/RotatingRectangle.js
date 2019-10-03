import React, { useState } from 'react'
import { useTick, Container } from '@inlet/react-pixi'
import { Rectangle } from './Rectangle'

export const RotatingRectangle = ({ x, y, width, height }) => {
  const [rotation, setRotation] = useState(0)

  useTick(() => {
    setRotation(rotation + 0.005)
  })

  return (
    <Container rotation={rotation} x={x} y={y}>
      <Rectangle x={-width / 2} y={-height / 2} width={width} height={height} />
    </Container>
  )
}

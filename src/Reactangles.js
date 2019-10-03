import React from 'react'
import { Rectangle } from './Rectangle'
import { RotatingRectangle } from './RotatingRectangle'

export const Rectangles = () => (
  <>
    <Rectangle x={0} y={0} width={100} height={100} />
    <RotatingRectangle x={150} y={150} width={100} height={100} />
    <Rectangle x={200} y={200} width={100} height={100} />
  </>
)

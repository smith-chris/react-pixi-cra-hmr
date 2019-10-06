import React from 'react'
import { hot } from 'react-hot-loader/root'
import { RotatingRectangle } from './RotatingRectangle'

export const WrappedRectangle = () => (
  <RotatingRectangle x={50} y={50} width={100} height={100} />
)

// Just comment out this line & rhl import, and HMR won't work properly
export const WrappedRectangleHot = hot(WrappedRectangle)

import { PixiComponent } from '@inlet/react-pixi'
import { Graphics } from 'pixi.js'

export const Rectangle = PixiComponent('Rect', {
  create({ x, y, width, height }) {
    const g = new Graphics()
    g.beginFill(0xff0000)
    g.drawRect(0, 0, width, height)
    return g
  },
  applyProps(ins, _, { x, y, width, height }) {
    ins.x = x
    ins.y = y
    ins.width = width
    ins.height = height
  },
  didMount() {
    console.log('rect mounted')
  },
  willUnmount() {
    console.log(`rect unmounted`)
  },
})

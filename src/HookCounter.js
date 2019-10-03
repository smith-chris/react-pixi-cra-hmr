import React, { useState } from 'react'

export const HookCounter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>You clicked {count} times!</p>

      <div style={{ display: 'flex' }}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </>
  )
}

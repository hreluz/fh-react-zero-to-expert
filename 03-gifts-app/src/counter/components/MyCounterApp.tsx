import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'

export const MyCounterApp = () => {

  const {handleAdd, handleSubtract, handleReset, counter} = useCounter(7);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      >
        <h1>counter: {counter}</h1>
        <div style={{
          display: 'flex',
          gap: '10px'
        }}>
          <button onClick={handleAdd}>+1</button>
          <button onClick={handleSubtract}>-1</button>
          <button onClick={handleReset}>Reset</button>
        </div>

    </div>
  )
}

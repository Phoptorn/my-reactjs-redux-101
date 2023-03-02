import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
// import styles from './Counter.module.css'

export function Counter() {
  const count = useSelector(state => state.counter.value) // useSelector การดึง state ที่อยู่ใน redux store มา
  const dispatch = useDispatch() // useDispatch การเรียกใช้งาน

  const test1 = "ทดสอบ1" // Increment
  const test2 = "ทดสอบ2" // Decrement

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
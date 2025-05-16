import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from './features/counter/counterSlice'

import {RootState} from "./store"
function App() {
 // const [count, setCount] = useState(0)

 const count = useSelector((state: RootState)=> state.counter.value);
 const dispatch = useDispatch();
  return (
    <>
   
      <h2 className="font-bold pt-3 text-lg">Count is:{count}</h2>
      <div className="flex justify-center mt-2">
        <button className='mr-1 p-2 bg-primary-500 hover:bg-primary-600 rounded text-primary-50' onClick={() => dispatch(increment())}>
            Increment
        </button>
        <button className='mr-1 p-2 bg-green-500 hover:bg-green-600 rounded text-primary-50' onClick={() => dispatch(decrement())}>
            Decrement
        </button>
        <button className='p-2 bg-gray-500 hover:bg-gray-600 rounded text-primary-50' onClick={() => dispatch(incrementByAmount(2))}>
          Increment By 2
        </button>
      </div>
    </>
  )
}

export default App

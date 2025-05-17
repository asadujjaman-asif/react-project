import React,{ useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Main from './components/products/main'

import {RootState} from "./store"
function App() {
 // const [count, setCount] = useState(0)

 const count = useSelector((state: RootState)=> state.counter.value);
 const dispatch = useDispatch();
  return (
    <>
      <Main />
    </>
  )
}

export default App

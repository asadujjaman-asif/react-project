import React,{ useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Main from './components/pages/product'
import ShoppingCart from './components/pages/shopping-cart'
import Home from './components/pages/home'

import {RootState} from "./store"
function App() {
 // const [count, setCount] = useState(0)

 const count = useSelector((state: RootState)=> state.counter.value);
 const dispatch = useDispatch();
  return (
    <>
      <Home />
    </>
  )
}

export default App

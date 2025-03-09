import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputFiled from './components/data-mutation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InputFiled/>
    </>
  )
}

export default App

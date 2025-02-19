import { useState,Suspense } from 'react'
import './App.css'
import BasicFetching from './components/basic-fetching'
import FetchUse from './components/fetch-use'

function App() {

  return (
    <>
    <Suspense fallback={<div>Loading...</div>} > 
      <FetchUse />
    </Suspense>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import InputFiled from './components/data-mutation'
const queryClient = new QueryClient(); 

function App() {


  return (
    <>
      
      <QueryClientProvider client={queryClient}>
       {/**  <Suspense fallback={<div>Loading...</div>} > */}
       <InputFiled/>
          {/** </Suspense>*/}
      </QueryClientProvider>
    </>
  )
}

export default App

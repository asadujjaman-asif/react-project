import { useState,Suspense } from 'react'
import './App.css'
import FetchUse from './components/data-fetching-pagination'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
       {/**  <Suspense fallback={<div>Loading...</div>} > */}
          <FetchUse />
          {/** </Suspense>*/}
      </QueryClientProvider>
    </>
  )
}

export default App

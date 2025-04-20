import { useState,Suspense } from 'react'
import './App.css'
import FetchUse from './components/data-fetching-pagination'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SearchContext from './context/search-context'

const queryClient = new QueryClient();

function App() {
  const [searchKeyword, setSearchKeyWord] = useState(""); 
  return (
    <>
   
        <QueryClientProvider client={queryClient}>
          <SearchContext.Provider value={{searchKeyword, setSearchKeyWord}}>
            <FetchUse />
          </SearchContext.Provider>
        </QueryClientProvider>
      
    </>
  )
}

export default App

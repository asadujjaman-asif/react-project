import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Layout from './components/layout';
import Home from './components/pages/home.tsx'
import Product from './components/pages/product.tsx'
import ShoppingCart from './components/pages/shopping-cart.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient();

import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store.ts'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/cart" element={<ShoppingCart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
</React.StrictMode>
);


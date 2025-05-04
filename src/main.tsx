import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app'
import { BrowserRouter, Routes,Route } from 'react-router';
import Layout from './components/layout';
import Dashboard from './pages/dashboard';
import Categories from './pages/categories';
import Customers from './pages/customers';
import Products from './pages/products';
import Deliveries from './pages/deliveries';
import Order from './pages/order';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Dashboard />}/>
            <Route path="categories" element={<Categories />}/>
            <Route path="customers" element={<Customers />}/>
            <Route path="products" element={<Products />}/>
            <Route path="deliveries" element={<Deliveries />}/>
            <Route path="orders" element={<Order />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

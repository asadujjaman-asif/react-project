import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app'
import { BrowserRouter, Routes,Route, Outlet } from 'react-router';
import Layout from './components/layout';
import Dashboard from './pages/dashboard';
import Categories from './pages/categories/index';
import CreateCategory from './pages/categories/create';
import EditCategory from './pages/categories/edit';
import Customers from './pages/customers';
import Products from './pages/products/index';
import EditProduct from './pages/products/edit';
import CreateProduct from './pages/products/create';
import Deliveries from './pages/deliveries';
import Order from './pages/order';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Dashboard />}/>
            <Route path="categories" element={<Outlet />}>
              <Route index element={<Categories />} />
              <Route path='create' element={<CreateCategory/>} />
              <Route path="edit/:id" element={<EditCategory/>} />
            </Route>
            <Route path="customers" element={<Customers />}/>
            
            <Route path="products" element={<Outlet />}>
              <Route index element={<Products />}/>
              <Route path='create' element={<CreateProduct/>} />
              <Route path="edit/:id" element={<EditProduct/>} />
            </Route>
            <Route path="deliveries" element={<Deliveries />}/>
            <Route path="orders" element={<Order />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

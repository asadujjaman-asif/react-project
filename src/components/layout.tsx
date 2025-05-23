import React,{ useState } from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import Main from './pages/product'
import ShoppingCart from './pages/shopping-cart'
import Home from './pages/home'
import { Outlet } from 'react-router'

import { BsMoon  ,BsCart3 } from "react-icons/bs";
import { RiArrowRightSLine ,RiArrowDropLeftLine  } from "react-icons/ri";
import { RxExternalLink  } from "react-icons/rx";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Header from './header'

const Layout= () =>{
 // const [count, setCount] = useState(0)

 const count = useSelector((state: RootState)=> state.counter.value);
 const dispatch = useDispatch();
  return (
    <>
      <div className='h-screen w-screen flex flex-col'>
           <Header />
           <div>
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default Layout

import { useQuery } from '@tanstack/react-query';
import React, { Suspense, use } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import menus from './menu'

interface MenuProp {
  id:number;
  title:string;
  slug:string;
}
const NavBar:React.FC = () => {
  return (
    <>
        <nav className='border-b right-4 top-full w-full justify-center bg-white py-5 px-6 '>
          <ul className='flex items-center'>
            { menus.map((menu:MenuProp,index:number)=>(
              <li className='' key={index}>
               <a className='flex justify-between text-base font-medium text-gray-400 hover:text-primary-500 lg:mx-4 lg:inline-flex lg:py-1' href={menu.slug}>{menu.title}</a>
              </li>
            )) }
          </ul>
        </nav>
    </>
  )
}
export default NavBar;

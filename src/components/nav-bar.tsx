import { useQuery } from '@tanstack/react-query';
import React, { Suspense, use } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const NavBar:React.FC = () => {
  return (
    <>
        <nav className='border-b right-4 top-full w-full justify-center bg-white py-5 px-6 '>
          <ul className='flex items-center'>
            <li className=''>
              <a className='flex justify-between text-base font-medium text-gray-400 hover:text-primary-500 lg:mx-4 lg:inline-flex lg:py-1' href=''>Shirt's</a>
            </li>
            <li className=''>
              <a className='flex justify-between text-base font-medium text-gray-400 hover:text-primary-500 lg:mx-4 lg:inline-flex lg:py-1' href=''>Pant's</a>
            </li>
            <li className=''>
              <a className='flex justify-between text-base font-medium text-gray-400 hover:text-primary-500 lg:mx-4 lg:inline-flex lg:py-1' href=''>T-Shirt's</a>
            </li>
            <li className=''>
              <a className='flex justify-between text-base font-medium text-gray-400 hover:text-primary-500 lg:mx-4 lg:inline-flex lg:py-1' href=''>Panjabi</a>
            </li>
            <li className=''>
              <a className='flex justify-between text-base font-medium text-gray-400 hover:text-primary-500 lg:mx-4 lg:inline-flex lg:py-1' href=''>Pajama</a>
            </li>
            <li className=''>
              <a className='flex justify-between text-base font-medium text-gray-400 hover:text-primary-500 lg:mx-4 lg:inline-flex lg:py-1' href=''>Cap's/Hats</a>
            </li>
            <li className=''>
              <a className='flex justify-between text-base font-medium text-gray-400 hover:text-primary-500 lg:mx-4 lg:inline-flex lg:py-1' href=''>Glasses</a>
            </li>
            <li className=''>
              <a className='flex justify-between text-base font-medium text-gray-400 hover:text-primary-500 lg:mx-4 lg:inline-flex lg:py-1' href=''>Watch's</a>
            </li>
            <li className=''>
              <a className='flex justify-between text-base font-medium text-gray-400 hover:text-primary-500 lg:mx-4 lg:inline-flex lg:py-1' href=''>Shoes</a>
            </li>
            <li className=''>
              <a className='flex justify-between text-base font-medium text-gray-400 hover:text-primary-500 lg:mx-4 lg:inline-flex lg:py-1' href=''>Winter</a>
            </li>
            <li className=''>
              <a className='flex justify-between text-base font-medium text-gray-400 hover:text-primary-500 lg:mx-4 lg:inline-flex lg:py-1' href=''>Summer</a>
            </li>
            <li className=''>
              <a className='flex justify-between text-base font-medium text-gray-400 hover:text-primary-500 lg:mx-4 lg:inline-flex lg:py-1' href=''>Joggers</a>
            </li>
            <li className=''>
              <a className='flex justify-between text-base font-medium text-gray-400 hover:text-primary-500 lg:mx-4 lg:inline-flex lg:py-1' href=''>Sneakers</a>
            </li>
          </ul>
        </nav>
    </>
  )
}
export default NavBar;

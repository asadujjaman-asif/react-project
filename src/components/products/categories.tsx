import React from 'react'
import { LuTextSearch } from "react-icons/lu";

const  Categories=()=>{
  return (
    <>
       <div className='flex gap-2 items-center font-lato bottom'>
            <LuTextSearch className='mb-2'/>
            <p className='mb-2'>Categories</p>
        </div>
        <nav>
            <ul className='py-3 font-lato font-medium'>
                <li className='hover:bg-gray-100 p-2 border-l-2 border-gray-200 rounded-tl-md rounded-bl-md'>
                    <a href="">All</a>
                </li>
                <li className='hover:bg-gray-100 p-2 border-l-2 border-gray-200 rounded-tl-md rounded-bl-md'>
                    <a href="">Electronics</a>
                </li>
                <li className='hover:bg-gray-100 p-2 border-l-2 border-gray-200 rounded-tl-md rounded-bl-md'>
                    <a href="">Fashion</a>
                </li>
                <li className='hover:bg-gray-100 p-2 border-l-2 border-gray-200 rounded-tl-md rounded-bl-md'>
                    <a href="">Home & Kitchen</a>
                </li>
                <li className='hover:bg-gray-100 p-2 border-l-2 border-gray-200 rounded-tl-md rounded-bl-md'>
                    <a href="">Beauty & Personal Care</a>
                </li>
                <li className='hover:bg-gray-100 p-2 border-l-2 border-gray-200 rounded-tl-md rounded-bl-md'>
                    <a href="">Sports & Outdoors</a>
                </li>
                <li className='hover:bg-gray-100 p-2 border-l-2 border-gray-200 rounded-tl-md rounded-bl-md'>
                    <a href="">Toys & Games</a>
                </li>
                <li className='hover:bg-gray-100 p-2 border-l-2 border-gray-200 rounded-tl-md rounded-bl-md'>
                    <a href="#">Automotive</a>
                </li>
                <li className='hover:bg-gray-100 p-2 border-l-2 border-gray-200 rounded-tl-md rounded-bl-md'>
                    <a href="#">Books & Stationery</a>
                </li>
                <li className='hover:bg-gray-100 p-2 border-l-2 border-gray-200 rounded-tl-md rounded-bl-md'>
                    <a href="#">Grocery & Essentials</a>
                </li>
                <li className='hover:bg-gray-100 p-2 border-l-2 border-gray-200 rounded-tl-md rounded-bl-md'>
                    <a href="#">Health & Wellness</a>
                </li>
            </ul>
        </nav> 
    </>
  )
}
export default Categories;

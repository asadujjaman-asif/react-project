import React, { FC } from 'react'
import { BsMoon  ,BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import menus from '../../src/menus'
type MenuProps={
  id:number,
  title:string,
  slug:string,
  icon?:string,
  isActive?:boolean,
}
const Header  = ()=>{
  return (
    <>
         <header className='bottom h-16 flex'>
                <aside className='w-64 p-2  overflow-y-auto'>
                  <Link to="/" className='flex items-center gap-1 text-2xl'>
                    <p className='font-bold text-blue-400 font-lato'>Neel</p><p>Ghuri</p>
                  </Link> 
                </aside>
                <nav className='flex-1 overflow-y-auto text-center'>
                    <ul className='flex justify-center font-semibold items-stretch h-full'>
                        {menus.map((menu)=>(
                          <li key={menu.id}className='hover:bg-gray-100 h-full px-3 flex items-center'>
                              <Link to={menu.slug}>{menu.title}</Link>
                              {menu.icon && menu.icon}
                          </li>
                        ))}
                    </ul>
                </nav>
                <aside className='w-64 overflow-y-auto flex gap-1 p-3'>
                   <button className='bg-primary-500 hover:bg-primary-600 rounded-md text-white py-2 px-3'>Sign In</button>
                   <button className='bg-white rounded-md  py-2 px-3 full'><BsMoon  size={20}/></button>
                </aside>
          </header>
    </>
  )
}
export default Header;


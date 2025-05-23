import React from 'react'
import { BsMoon  ,BsCart3   } from "react-icons/bs";
import { RxExternalLink } from "react-icons/rx";
import { LuTextSearch } from "react-icons/lu";

const  ShoppingCart=()=> {
  return (
    <>
       <div className="flex flex-col items-center justify-center min-h-screen">
              <p className="text-3xl font-lato font-bold mb-4">Shopping cart</p>
              <div className="rounded-md p-4 w-full max-w-3xl bg-white shadow">
                {/* cart item */}
                <div className="flex items-center justify-between py-4 border-b">
                  <div className="flex gap-5">
                    <img
                      src="https://i.imgur.com/cSytoSD.jpeg"
                      className="w-28 rounded-md"
                      alt=""
                    />
                    <div>
                      <p className="font-lato text-xl">Classic Heather Gray Hoodie</p>
                      <p className="font-lato text-xl">$70</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <button className="bg-primary-400 py-1 px-3 rounded-md text-white font-lato hover:bg-primary-500">Remove</button>
                    <button className="bg-primary-400 py-1 px-3 rounded-md text-white font-lato hover:bg-primary-500">-</button>
                    <p>1</p>
                    <button className="bg-primary-400 py-1 px-3 rounded-md text-white font-lato hover:bg-primary-500">+</button>
                  </div>
                </div>

                {/* second item */}
                <div className="flex items-center justify-between py-4">
                  <div className="flex gap-5">
                    <img
                      src="https://i.imgur.com/cSytoSD.jpeg"
                      className="w-28 rounded-md"
                      alt=""
                    />
                    <div>
                      <p className="font-lato text-xl">Classic Heather Gray Hoodie</p>
                      <p className="font-lato text-xl">$70</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <button className="bg-primary-400 py-1 px-3 rounded-md text-white font-lato hover:bg-primary-500">Remove</button>
                    <button className="bg-primary-400 py-1 px-3 rounded-md text-white font-lato hover:bg-primary-500">-</button>
                    <p>1</p>
                    <button className="bg-primary-400 py-1 px-3 rounded-md text-white font-lato hover:bg-primary-500">+</button>
                  </div>
                </div>
                <button className='bg-green-600 hover:bg-green-700 py-2 px-4 font-lato text-lg rounded-md text-white'>Checkout</button>
              </div>
            </div>
    </>
  )
}

export default ShoppingCart;
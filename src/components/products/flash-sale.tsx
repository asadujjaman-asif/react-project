import React from 'react'
import { BsCart3   } from "react-icons/bs";
import { RxExternalLink } from "react-icons/rx";
import {Product} from '../../../src/type'
import { useQuery } from '@tanstack/react-query';
const FlashSale=()=>{
    const {data:products, isLoading,error}=useQuery({
        queryKey:['products'],
        queryFn:()=>fetch('/products.json')
        .then(async (res)=>{
            const data = await res.json();
            return data as Product[];
        })
    });
    const productList= products?.slice(35,40);
  return (
    <>
        <div className='py-2'>
            <p className='font-lato font-bold'>Flash Sale:</p>
            {productList?.map((product:Product)=>(
                <div className='flex py-1'>
                <div className='w-16 full rounded-md mr-1'>
                    <img src={product.thumbnail} className='rounded-md' alt=""/>
                </div>
                <div className=''>
                    <p className='font-lato font-bold text-xs'>{product.title}</p>
                    <div className="flex gap-2 mt-1 font-lato">
                        <p style={{ fontSize: '10px' }} className="font-bold p-2 text-xs gap-1"><span>${product.price}</span> <strike>${(product.price+(product.price*(product.discountPercentage/100))).toFixed(2)}</strike>
                            
                        </p>
                        <a
                            href="#"
                            className="bg-gray-400 hover:bg-gray-500 flex text-center text-white rounded-md py-1 px-2"
                        >
                            <RxExternalLink size={14} />
                        </a>
                        <button className="bg-blue-400 hover:bg-blue-500 p-2 text-white rounded-md flex gap-2 items-center font-bold">
                            <BsCart3 /> 
                        </button>
                    </div>
                </div>
            </div>
            ))}
            
            <a href="">See more</a>
        </div>
    </>
  )
}
export default FlashSale;
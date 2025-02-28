import { keepPreviousData, useQuery } from '@tanstack/react-query';
import React, { Suspense, use } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

type Product = {
  id:number;
  title:string;
  price:number;
  description:string;
  category:{
    id:number;
    name:string;
    image:string;
};
  images:string[];
};

const BasicFetching = () => {
  
 const goToNextPage=() =>{
  setPage((prevPage) =>prevPage+1)
 }
 const goTOPrevPage=() =>{
  setPage((nextPage) =>nextPage-1)
 }
 const [page,setPage]= useState(1);
  let limit = 12;
  const offset = (page-1) * limit;

  const hasPreviousPage = offset > 0;
  const hasNextPage = offset + limit<30;
 // const products = use(fetchProduct);
 const {data:products,isLoading} = useQuery<Product[]>({
  queryKey: ["product",offset,limit],
  queryFn:({queryKey:[_,offset,limit]}) =>{
    return  fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`).then((response)=>response.json());
  },
  placeholderData: keepPreviousData,
 });
 console.log(products);
if(isLoading){
  return <div>Loading...</div>
}
  return (
    <div className='h-screen w-full py-20 flex justify-center'>
      <div className='w-full max-w-5xl px-6'>
        <h1 className="text-2xl font-bold mb-5"></h1>
        <div className="grid grid-cols-3 gap-4">
               
           { products?.map((product:Product ) => (
            <div key = {product.id} className='bg-gray-100 p-5 rounded-lg'>
              <img src={product.images[0]!=""?product.images[0]:product.images[1]} className="w-full h-40 object-cover" alt={product.title} />
              <h2 className="text-base font-semibold mt-2">
              {product.title} 
              </h2>
              <div className='flex items-center justify-between mt-2'>
                <p className="text-lg font-semibold mt-2">
                   ${product.price} 
                </p>
                <button className="bg-emerald-500 text-sm text-emerald-50 px-4 py-2 mt-2 rounded hover:bg-emerald-600">Add to cart</button>
              </div>
              
            </div>
          ))}
         
        </div>
        <div className="flex items-center justify-center gap-2 py-5 w-full">
            <button className="bg-emerald-500 text-sm text-emerald-50 px-4 py-2 rounded hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed" disabled={!hasPreviousPage} onClick={goTOPrevPage}>Prev</button>
            <button className="bg-emerald-500 text-sm text-emerald-50 px-4 py-2 rounded hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed" disabled={!hasNextPage} onClick={goToNextPage}>Next</button>
        </div>
      </div>
    </div>
  )
}
export default BasicFetching;

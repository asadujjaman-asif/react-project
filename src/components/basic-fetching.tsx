import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

type Product = {
  id:number;
  title:string;
  price:number;
  description:string;
  category:string;
  image:string;
};
const BasicFetching = () => {
  const [products,setProduct] = useState<Product[]>([]);
  const [isLoadings,setLoadings] = useState(true);
  useEffect(()=>{
    setLoadings(true);
    fetch("https://fakestoreapi.com/products")
    .then((response)=>response.json())
    .then((data)=>{
      setLoadings(false);
      setProduct(data);
    })
    .catch((error)=>{
      console.log("Something went wrong");
      setLoadings(false);
    });
  },[]);

  if(isLoadings){
    return <div>Loading...</div>
  }

  return (
    <div className='h-screen w-full py-20 flex justify-center'>
      <div className='w-full max-w-5xl px-6'>
        <h1 className="text-2xl font-bold mb-5"></h1>
        <div className="grid grid-cols-4 gap-4">
          { products.map((product:Product ) => (
            <div key = {product.id} className='bg-gray-100 p-5 rounded-lg'>
              <img src={product.image} className="w-full h-40 object-cover" alt={product.title} />
              <h2 className="text-lg font-semibold mt-2">
              {product.title} 
              </h2>
              <p className="text-sm text-gray-500 mt-2">
              {product.description} 
              </p>
              <p className="text-lg font-semibold mt-2">
                {product.price} 
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default BasicFetching;

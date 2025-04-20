import { keepPreviousData, useQuery } from '@tanstack/react-query';
import React, { Suspense, use, useCallback } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import TopMenu from './top-menu';
import SearchBar from './search-bar';
import NavBar from './nav-bar';
import { useSearch } from '../context/search-context';
import { CartItem, Products } from '../type';
import ProductCard from "../components/productCard"

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

    const {searchKeyword} = useSearch();
    const [cartItems,setCartItems] = useState<CartItem[]>([]);
    

  
  
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

 
 const productsFilter = products?.filter((product)=>{
    //console.log("Product filters");
   return  product.title.toLowerCase().includes(searchKeyword.toLowerCase())
  });
  /*
  const productsFilter =useMemo(()=>{
  console.log("Product filters");
    return  products?.filter((product)=>
     product.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );
 },[products, searchKeyword]);
 */
  const addToCart = useCallback((product:Product)=>{
    setCartItems((prevItems)=>{
        const existedItem = prevItems.find((item)=>item.id===product.id);
        if(existedItem){
          return prevItems.map((item)=>
            item.id===product.id? {...item, quantity:item.quantity+1}:item
          );
        }else{
          return [...prevItems,{...product, quantity:1}];
        }
    });
  },[]);
  const removeFromCart = useCallback((productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  },[]);
    // Update item quantity
  const updateQuantity = useCallback((productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  },[]);
   // Calculate total price
   const calculateTotal = useCallback(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },[cartItems]);
if(isLoading){
  return <div>Loading...</div>
}
  return (
    <>
      <header className='w-full bg-white'>
        <div className='border-b border-stroke dark:border-dark-3 sm:block'>
          <TopMenu />
        </div>
        <div className='border-b border-stroke dark:border-dark-3 lg:py-3'>
            <SearchBar 
                cartItems={cartItems}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                calculateTotal={calculateTotal}
            />
        </div>
        <NavBar />
      </header>
      <main className="flex relative">
        <div className='h-screen w-full flex justify-center'>
          
          <div className='w-full max-w-5xl px-6'>
            <div className="py-3 rounded-md mt-2 mb-2 items-center">
              <p className='font-bold'>Featured Products</p>
              <p className='text-sm'>Check & Get Your Desired Product!</p>
            </div>
            
              {productsFilter?.length===0? (
                <p className="text-center text-gray-500 py-4"> No products found matching</p>
              ):(
                <div className="grid grid-cols-3 gap-4">
                { productsFilter?.map((product:Product ) => (
                  <ProductCard
                   key={product.id}
                   product={product}
                   onAddToCart={addToCart}
                 />
                ))}
                </div>
              )}
            <div className="flex items-center justify-center gap-2 py-5 w-full">
                <button className="bg-emerald-500 text-sm text-emerald-50 px-4 py-2 rounded hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed" disabled={!hasPreviousPage} onClick={goTOPrevPage}>Prev</button>
                <button className="bg-emerald-500 text-sm text-emerald-50 px-4 py-2 rounded hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed" disabled={!hasNextPage} onClick={goToNextPage}>Next</button>
            </div>
          </div>
        </div>
      </main>
      
    </>
  )
}
export default BasicFetching;

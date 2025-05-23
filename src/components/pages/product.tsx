import React from 'react'
import { BsCart3   } from "react-icons/bs";
import { RxExternalLink } from "react-icons/rx";
import Category from '../products/categories'
import Search from '../products/search'
import FlashSale from '../products/flash-sale'
import BestSale from '../products/best-sale'
import {Product} from '../../../src/type'
import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const Products=()=> {

    const {data:products, isLoading,error} = useQuery({
        queryKey:['products'],
        queryFn:()=>fetch('/products.json?offset=0&limit=10')
            .then(async(res)=>{
                const data = await res.json();
                return data as Product[];
            })
    });
    const items = products?.slice(0,30);
  return (
    <>
        <div className='flex flex-1 overflow-hidden'>
            <aside className='right w-64 p-4 overflow-y-auto'>
                <Category />
                <Search />
            </aside>
            <main className='flex-1 overflow-y-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 p-4'>
                    {items?.map((product:Product)=>(
                        <div key={product.id}className='rounded-md shadow-md border bg-white'>
                            <div className='h-auto overflow-x-hidden'>
                                <Swiper 
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    pagination={{
                                    clickable: true,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                    >
                                    {product.images.map((img,index)=>(
                                        <SwiperSlide>
                                            <img key={index} src={img} className='rounded-tr-md rounded-tl-md' alt="product image"/>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className='p-5 '>
                                <p className='font-bold text-xl font-lato'>{product.title}</p>
                                <p className='mt-2 text-md text-gray-400 font-lato font-semibold'>Category:{product.category}</p>
                                <p className='mt-4 text-md text-gray-400 text-justify font-lato'>
                                    {product.description}
                                </p>
                                <div className="flex gap-2 mt-4 font-lato">
                                    <p className="font-bold p-2 text-lg">{product.price}$</p>
                                    <a
                                        href="#"
                                        className="bg-gray-400 hover:bg-gray-500 flex text-center text-white rounded-md py-1 px-2"
                                    >
                                        <RxExternalLink size={24} />
                                    </a>
                                    <button className="bg-blue-400 hover:bg-blue-500 p-2 text-white rounded-md flex gap-2 items-center font-bold">
                                        <BsCart3 /> Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <aside className='w-64 p-4 overflow-y-auto left'>
                <FlashSale />
                <BestSale />
            </aside>
        </div>
    </>
  )
}
export default Products;

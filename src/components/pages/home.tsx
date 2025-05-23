import React from 'react'
import { RiArrowRightSLine ,RiArrowDropLeftLine  } from "react-icons/ri";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import homeItems from '../../home-items'
type productType={
    id:number,
    name:string,
    slug:string,
    category?:string,
    description?:string,
    price?:string,
    images?:string,
    isActive?:boolean
}
const  Home=()=> {
  return (
    <>
       <div className='relative overflow-hidden w-full flex justify-center py-10'>
                <div className='w-3/4 relative'>
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                          }}
                        spaceBetween={50}
                        slidesPerView={3}
                        className="w-full"
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {homeItems.map((item)=>(
                        <SwiperSlide>
                            <div key={item.id} className='rounded-md shadow-md border bg-white'>
                               
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
                                    {item.images.map((img,index)=>(
                                        <SwiperSlide>
                                            <img   key={index} src={img} className='rounded-tr-md rounded-tl-md' alt={`Image ${index + 1}`}/>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                </div>
                                <div className='p-5 '>
                                    <p className='font-bold text-xl font-lato'>{item.name}</p>
                                    <p className='mt-2 text-md text-gray-400 font-lato font-semibold'>Category:{item.category}</p>
                                    <p className='mt-4 text-md text-gray-400 text-justify font-lato'>{item.description}</p>
                                    <div className="flex justify-between items-center mt-4 font-lato">
                                        <p className="font-bold p-2 text-lg">{item.price}$</p>
                                        <button className="bg-blue-400 hover:bg-blue-500 p-2 text-white rounded-md flex gap-2 items-center font-bold">
                                            Learn More Now!
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                        <div className="custom-prev bg-gray-100 hover:bg-gray-200 absolute top-1/2 left-2 z-10 cursor-pointer text-gray-600 rounded-full hover:text-gray-700 -translate-y-1/2">
                            <RiArrowDropLeftLine   size={28} />
                        </div>
                        <div className="custom-next bg-gray-100 hover:bg-gray-200 absolute top-1/2 right-2 z-10 cursor-pointer text-gray-600 rounded-full hover:text-gray-700 -translate-y-1/2">
                            <RiArrowRightSLine size={24}/>
                        </div>
                </div>
        </div>
    </>
  )
}
export default Home;

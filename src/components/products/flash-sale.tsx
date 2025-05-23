import React from 'react'
import { BsCart3   } from "react-icons/bs";
import { RxExternalLink } from "react-icons/rx";
const FlashSale=()=>{
  return (
    <>
        <div className='py-2'>
            <p className='font-lato font-bold'>Flash Sale:</p>
            <div className='flex py-1'>
                <div className='w-16 full rounded-md mr-1'>
                    <img src='https://i.imgur.com/qNOjJje.jpeg' className='rounded-md' alt=""/>
                </div>
                <div className=''>
                    <p className='font-lato font-bold text-xs'>Futuristic Holographic...</p>
                    <div className="flex gap-2 mt-1 font-lato">
                        <p className="font-bold p-2 text-xs gap-1"><span>$25</span> <strike>$30</strike>
                            
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
            <div className='flex py-1'>
                <div className='w-16 full rounded-md mr-1'>
                    <img src='https://i.imgur.com/hKcMNJs.jpeg' className='rounded-md' alt=""/>
                </div>
                <div className=''>
                    <p className='font-lato font-bold text-xs'>Vibrant Runners: Bold ...</p>
                    <div className="flex gap-2 mt-1 font-lato">
                        <p className="font-bold p-2 text-xs gap-1"><span>$25</span> <strike>$30</strike>
                            
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
            <div className='flex py-1'>
                <div className='w-16 full rounded-md mr-1'>
                    <img src='https://i.imgur.com/mcW42Gi.jpeg' className='rounded-md' alt=""/>
                </div>
                <div className=''>
                    <p className='font-lato font-bold text-xs'>Futuristic Holographic...</p>
                    <div className="flex gap-2 mt-1 font-lato">
                        <p className="font-bold p-2 text-xs gap-1"><span>$25</span> <strike>$30</strike>
                            
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
            <div className='flex py-1'>
                <div className='w-16 full rounded-md mr-1'>
                    <img src='https://i.imgur.com/sC0ztOB.jpeg' className='rounded-md' alt=""/>
                </div>
                <div className=''>
                    <p className='font-lato font-bold text-xs'>Classic Blue Suede...</p>
                    <div className="flex gap-2 mt-1 font-lato">
                        <p className="font-bold p-2 text-xs gap-1"><span>$25</span> <strike>$30</strike>
                            
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
            <div className='flex py-1'>
                <div className='w-16 full rounded-md mr-1'>
                    <img src='https://i.imgur.com/KeqG6r4.jpeg' className='rounded-md' alt=""/>
                </div>
                <div className=''>
                    <p className='font-lato font-bold text-xs'>Classic Black...</p>
                    <div className="flex gap-2 mt-1 font-lato">
                        <p className="font-bold p-2 text-xs gap-1"><span>$25</span> <strike>$30</strike>
                            
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
            <a href="">See more</a>
        </div>
    </>
  )
}
export default FlashSale;
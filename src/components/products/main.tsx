import React from 'react'
import { BsMoon  ,BsCart3   } from "react-icons/bs";
import { RxExternalLink } from "react-icons/rx";
import { LuTextSearch } from "react-icons/lu";

 function Main() {
  return (
    <>
        <div className='h-screen w-screen flex flex-col'>
            <header className='bottom h-16 flex'>
                <aside className='w-64 p-2  overflow-y-auto'>
                  <a href="" className='flex items-center gap-1 text-2xl'>
                    <p className='font-bold text-blue-400 font-lato'>Neel</p><p>Ghuri</p>
                  </a> 
                </aside>
                <nav className='flex-1 overflow-y-auto text-center'>
                    <ul className='flex justify-center font-semibold items-stretch h-full'>
                        <li className='hover:bg-gray-100 h-full px-3 flex items-center'><a href='#'>Home</a></li>
                        <li className='hover:bg-gray-100 h-full px-3 flex items-center'><a href='#'>Product</a></li>
                        <li className='hover:bg-gray-100 h-full px-3 flex items-center'>
                            <a href='#' className='flex items-center'>
                            Carts <BsCart3 color="blue"/>
                            </a>
                        </li>
                    </ul>
                </nav>
                <aside className='w-64 overflow-y-auto flex gap-1 p-3'>
                   <button className='bg-primary-500 hover:bg-primary-600 rounded-md text-white py-2 px-3'>Sign In</button>
                   <button className='bg-white rounded-md  py-2 px-3 full'><BsMoon  size={20}/></button>
                </aside>
            </header>
            <div className='flex flex-1 overflow-hidden'>
                <aside className='right w-64 p-4 overflow-y-auto'>
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
                    <div className='py-2'>
                        <p className='font-lato font-bold'>Search Product With Name *</p>
                        <input  type="text" className='border py-2 px-3 rounded-md mt-2 focus:outline-none focus:ring-1' placeholder='Type a product...'/>
                    </div>
                    <div className='py-2'>
                    <label for="rangeInput" className="block mb-1 font-lato text-md font-medium">Price Range:</label>
                        <input  type="range" min="5" max="500" 
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        />
                    </div>
                </aside>
                <main className='flex-1 overflow-y-auto'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 p-4'>
                        <div className='rounded-md shadow-md border bg-white'>
                            <div className='h-auto overflow-x-hidden'>
                                <img src="https://i.imgur.com/cSytoSD.jpeg" className='rounded-tr-md rounded-tl-md' alt="product image"/>
                            </div>
                            <div className='p-5 '>
                                <p className='font-bold text-xl font-lato'>Majestic Mountain Grap...</p>
                                <p className='mt-2 text-md text-gray-400 font-lato font-semibold'>Category:Cloth</p>
                                <p className='mt-4 text-md text-gray-400 text-justify font-lato'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In laborum omnis earum voluptate cumque alias inventore quia consequuntur possimus distinctio, voluptatum eos, culpa vitae a laudantium asperiores. Cupiditate, facilis vero!</p>
                                <div className="flex gap-2 mt-4 font-lato">
                                    <p className="font-bold p-2 text-lg">25$</p>
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
                        <div className='rounded-md shadow-md border bg-white'>
                            <div className='h-auto overflow-x-hidden'>
                                <img src="https://i.imgur.com/1twoaDy.jpeg" className='rounded-tr-md rounded-tl-md' alt="product image"/>
                            </div>
                            <div className='p-5 '>
                                <p className='font-bold text-xl font-lato'>Classic Red Pullover Hood</p>
                                <p className='mt-2 text-md text-gray-400 font-lato font-semibold'>Category:Cloth</p>
                                <p className='mt-4 text-md text-gray-400 text-justify font-lato'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In laborum omnis earum voluptate cumque alias inventore quia consequuntur possimus distinctio, voluptatum eos, culpa vitae a laudantium asperiores. Cupiditate, facilis vero!</p>
                                <div className="flex gap-2 mt-4 font-lato">
                                    <p className="font-bold p-2 text-lg">10$</p>
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
                        <div className='rounded-md shadow-md border bg-white'>
                            <div className='h-auto overflow-x-hidden'>
                                <img src="https://i.imgur.com/cHddUCu.jpeg" className='rounded-tr-md rounded-tl-md' alt="product image"/>
                            </div>
                            <div className='p-5 '>
                                <p className='font-bold text-xl font-lato'>Classic Heather Gray Hoodie..</p>
                                <p className='mt-2 text-md text-gray-400 font-lato font-semibold'>Category:Cloth</p>
                                <p className='mt-4 text-md text-gray-400 text-justify font-lato'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In laborum omnis earum voluptate cumque alias inventore quia consequuntur possimus distinctio, voluptatum eos, culpa vitae a laudantium asperiores. Cupiditate, facilis vero!</p>
                                <div className="flex gap-2 mt-4 font-lato">
                                    <p className="font-bold p-2 text-lg">25$</p>
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
                        <div className='rounded-md shadow-md border bg-white'>
                            <div className='h-auto overflow-x-hidden'>
                                <img src="https://i.imgur.com/R2PN9Wq.jpeg" className='rounded-tr-md rounded-tl-md' alt="product image"/>
                            </div>
                            <div className='p-5 '>
                                <p className='font-bold text-xl font-lato'>Classic Grey Hooded Sweatshirt</p>
                                <p className='mt-2 text-md text-gray-400 font-lato font-semibold'>Category:Cloth</p>
                                <p className='mt-4 text-md text-gray-400 text-justify font-lato'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In laborum omnis earum voluptate cumque alias inventore quia consequuntur possimus distinctio, voluptatum eos, culpa vitae a laudantium asperiores. Cupiditate, facilis vero!</p>
                                <div className="flex gap-2 mt-4 font-lato">
                                    <p className="font-bold p-2 text-lg">25$</p>
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
                        <div className='rounded-md shadow-md border bg-white'>
                            <div className='h-auto overflow-x-hidden'>
                                <img src="https://i.imgur.com/9LFjwpI.jpeg" className='rounded-tr-md rounded-tl-md' alt="product image"/>
                            </div>
                            <div className='p-5 '>
                                <p className='font-bold text-xl font-lato'>Classic Red Jogger Sweatpants</p>
                                <p className='mt-2 text-md text-gray-400 font-lato font-semibold'>Category:Cloth</p>
                                <p className='mt-4 text-md text-gray-400 text-justify font-lato'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In laborum omnis earum voluptate cumque alias inventore quia consequuntur possimus distinctio, voluptatum eos, culpa vitae a laudantium asperiores. Cupiditate, facilis vero!</p>
                                <div className="flex gap-2 mt-4 font-lato">
                                    <p className="font-bold p-2 text-lg">25$</p>
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
                        <div className='rounded-md shadow-md border bg-white'>
                            <div className='h-auto overflow-x-hidden'>
                                <img src="https://i.imgur.com/R3iobJA.jpeg" className='rounded-tr-md rounded-tl-md' alt="product image"/>
                            </div>
                            <div className='p-5 '>
                                <p className='font-bold text-xl font-lato'>Classic Navy Blue Baseball Cap</p>
                                <p className='mt-2 text-md text-gray-400 font-lato font-semibold'>Category:Cloth</p>
                                <p className='mt-4 text-md text-gray-400 text-justify font-lato'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In laborum omnis earum voluptate cumque alias inventore quia consequuntur possimus distinctio, voluptatum eos, culpa vitae a laudantium asperiores. Cupiditate, facilis vero!</p>
                                <div className="flex gap-2 mt-4 font-lato">
                                    <p className="font-bold p-2 text-lg">25$</p>
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
                        <div className='rounded-md shadow-md border bg-white'>
                            <div className='h-auto overflow-x-hidden'>
                                <img src="https://i.imgur.com/wXuQ7bm.jpeg" className='rounded-tr-md rounded-tl-md' alt="product image"/>
                            </div>
                            <div className='p-5 '>
                                <p className='font-bold text-xl font-lato'>Classic Blue Baseball Cap</p>
                                <p className='mt-2 text-md text-gray-400 font-lato font-semibold'>Category:Cloth</p>
                                <p className='mt-4 text-md text-gray-400 text-justify font-lato'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In laborum omnis earum voluptate cumque alias inventore quia consequuntur possimus distinctio, voluptatum eos, culpa vitae a laudantium asperiores. Cupiditate, facilis vero!</p>
                                <div className="flex gap-2 mt-4 font-lato">
                                    <p className="font-bold p-2 text-lg">25$</p>
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
                        <div className='rounded-md shadow-md border bg-white'>
                            <div className='h-auto overflow-x-hidden'>
                                <img src="https://i.imgur.com/cBuLvBi.jpeg" className='rounded-tr-md rounded-tl-md' alt="product image"/>
                            </div>
                            <div className='p-5 '>
                                <p className='font-bold text-xl font-lato'>Classic Red Baseball Cap</p>
                                <p className='mt-2 text-md text-gray-400 font-lato font-semibold'>Category:Cloth</p>
                                <p className='mt-4 text-md text-gray-400 text-justify font-lato'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In laborum omnis earum voluptate cumque alias inventore quia consequuntur possimus distinctio, voluptatum eos, culpa vitae a laudantium asperiores. Cupiditate, facilis vero!</p>
                                <div className="flex gap-2 mt-4 font-lato">
                                    <p className="font-bold p-2 text-lg">25$</p>
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
                    </div>
                </main>
                <aside className='w-64 p-4 overflow-y-auto left'>
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
                    <div className='py-2'>
                        <p className='font-lato font-bold'>Best Sale:</p>
                        <div className='flex py-1'>
                            <div className='w-16 full rounded-md mr-1'>
                                <img src='https://i.imgur.com/qNOjJje.jpeg' className='rounded-md' alt=""/>
                            </div>
                            <div className=''>
                                <p className='font-lato font-bold text-xs'>Futuristic Holographic...</p>
                                <div className="flex gap-2 mt-1 font-lato">
                                    <p className="font-bold p-2 text-sm gap-1"><span>$25</span></p>
                                    <a
                                        href="#"
                                        className="bg-gray-400 hover:bg-gray-500 flex text-center text-white rounded-md py-1 px-2"
                                    >
                                        <RxExternalLink size={16} />
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
                                    <p className="font-bold p-2 text-sm gap-1"><span>$25</span></p>
                                    <a
                                        href="#"
                                        className="bg-gray-400 hover:bg-gray-500 flex text-center text-white rounded-md py-1 px-2"
                                    >
                                        <RxExternalLink size={16} />
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
                                    <p className="font-bold p-2 text-sm gap-1"><span>$25</span></p>
                                    <a
                                        href="#"
                                        className="bg-gray-400 hover:bg-gray-500 flex text-center text-white rounded-md py-1 px-2"
                                    >
                                        <RxExternalLink size={16} />
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
                                    <p className="font-bold p-2 text-sm gap-1"><span>$25</span></p>
                                    <a
                                        href="#"
                                        className="bg-gray-400 hover:bg-gray-500 flex text-center text-white rounded-md py-1 px-2"
                                    >
                                        <RxExternalLink size={16} />
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
                                    <p className="font-bold p-2 text-sm gap-1"><span>$25</span>
                                       
                                    </p>
                                    <a
                                        href="#"
                                        className="bg-gray-400 hover:bg-gray-500 flex text-center text-white rounded-md py-1 px-2"
                                    >
                                        <RxExternalLink size={16} />
                                    </a>
                                    <button className="bg-blue-400 hover:bg-blue-500 p-2 text-white rounded-md flex gap-2 items-center font-bold">
                                        <BsCart3 /> 
                                    </button>
                                </div>
                            </div>
                        </div>
                        <a href="">See more</a>
                    </div>
                </aside>
            </div>
        </div>
    </>
  )
}
export default Main;

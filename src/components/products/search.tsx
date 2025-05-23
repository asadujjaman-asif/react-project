import React from 'react'

const Search=()=>{
  return (
    <>
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
    </>
  )
}
export default Search;
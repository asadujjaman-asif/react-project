import {React,useRef} from 'react'
import { FiChevronLeft ,FiChevronRight} from "react-icons/fi";

 const UseRef=()=> {
  const images=[
    {
      title:'Image-1',
      path:'https://picsum.photos/200/300?random=1',
      isActive: true,
    },
    {
      title:'Image-2',
      path:'https://picsum.photos/200/300?random=2',
      isActive: true,
    }
    ,
    {
      title:'Image-3',
      path:'https://picsum.photos/200/300?random=3',
      isActive: true,
    },
    {
      title:'Image-3',
      path:'https://picsum.photos/200/300?random=3',
      isActive: true,
    },
    {
      title:'Image-4',
      path:'https://picsum.photos/200/300?random=4',
      isActive: true,
    },
    {
      title:'Image-5',
      path:'https://picsum.photos/200/300?random=5',
      isActive: true,
    },
    {
      title:'Image-6',
      path:'https://picsum.photos/200/300?random=6',
      isActive: true,
    },
    {
      title:'Image-7',
      path:'https://picsum.photos/200/300?random=7',
      isActive: false,
    },
    {
      title:'Image-8',
      path:'https://picsum.photos/200/300?random=8',
      isActive: false,
    },
    {
      title:'Image-9',
      path:'https://picsum.photos/200/300?random=9',
      isActive: false,
    }
    ,
    {
      title:'Image-10',
      path:'https://picsum.photos/200/300?random=10',
      isActive: false,
    }
  ];
  const sliderRef = useRef(null);
  const allProject=()=>{
    console.log(sliderRef);
  }
  return (
    <>
        <div className='space-y-2'>
            <p className='font-bold space-y-2'>My Project</p>
            <div className='flex items-center justify-center gap-5 text-slate-900'>
              <button className='bg-blue-500 px-4 py-1 text-white rounded-md' onClick={()=>allProject()}>All</button>
              <button className='bg-blue-500 px-4 py-1 text-white rounded-md' onClick={()=>allProject()}>React Js</button>
              <button className='bg-blue-500 px-4 py-1 text-white rounded-md' onClick={()=>allProject()}>Vue Js</button>
              <button className='bg-blue-500 px-4 py-1 text-white rounded-md' onClick={()=>allProject()}>PHP</button>
              <button className='bg-blue-500 px-4 py-1 text-white rounded-md' onClick={()=>allProject()}>Python</button>
            </div>
            <div className='flex gap-2'>
              <div className="All space-y-1">
                <img 
                  src='https://picsum.photos/300/500?random=9' 
                  alt="All" 
                  className="rounded shadow" 
                />
                <img 
                  src='https://picsum.photos/300/400?random=9' 
                  alt="All" 
                  className="rounded shadow" 
                />
              </div>
              <div className="react-js space-y-1">
                <img 
                  src='https://picsum.photos/400/200?random=4' 
                  alt="All" 
                  className="rounded shadow" 
                />
                <img 
                  src='https://picsum.photos/400/400?random=1' 
                  alt="All" 
                  className="rounded shadow" 
                />
                <img 
                  src='https://picsum.photos/400/300?random=1' 
                  alt="All" 
                  className="rounded shadow" 
                />
              </div>
              <div className="react-js space-y-2">
                <img 
                  src='https://picsum.photos/400/300?random=8' 
                  alt="All" 
                  className="rounded shadow" 
                />
                <img 
                  src='https://picsum.photos/400/220?random=8' 
                  alt="All" 
                  className="rounded shadow" 
                />
                <img 
                  src='https://picsum.photos/400/380?random=8' 
                  alt="All" 
                  className="rounded shadow" 
                />
              </div>
              <div className="react-js space-y-2">
                <img 
                  src='https://picsum.photos/400/200?random=6' 
                  alt="All" 
                  className="rounded shadow" 
                />
                <img 
                  src='https://picsum.photos/400/500?random=6' 
                  alt="All" 
                  className="rounded shadow" 
                />
                <img 
                  src='https://picsum.photos/400/200?random=5' 
                  alt="All" 
                  className="rounded shadow" 
                />
              </div>
            </div>
        </div>
    </>
  )
}
export default UseRef;

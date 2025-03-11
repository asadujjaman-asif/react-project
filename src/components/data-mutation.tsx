import {React,FC,useState} from 'react'
import { useMutation,QueryClient, QueryClientProvider } from '@tanstack/react-query';

type ProductFormData = {
  title:string;
  price:number | null;
  description:string;
  categoryId:number | null;
  images:string[];
}
type FormError = {
  title?:string;
  price?:string;
  description?:string;
  categoryId?:string;
  images?:string;
}
const categories = [
  {id:1,name:'Electronics'},
  {id:2,name:'Shoes'},
  {id:3,name:'Components'},
];
const DataMutation:React.FC=(any)=> {

  const initialFormData:ProductFormData = {
      title:"",
      price:null,
      description:"",
      categoryId:null,
      images:[]
  }
  
  const [formData,setFormData] = useState<ProductFormData>(initialFormData);
  const [errors,setErrors] = useState<FormError>({});
  
  const mutation = useMutation({
      mutationKey:['create-product'],
      mutationFn:async ()=>
        fetch("https://api.escuelajs.co/api/v1/products/",{
          method:"POST",
          headers:{
            "Content-type":"application/json",
          },
          body:JSON.stringify(formData)
        }),
      onSuccess: ()=>{
        setFormData(initialFormData);
      },
      onError:()=>{

      }

  });
  
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      if(!validateData()){
          return;
      }
      mutation.mutate();
  }
 
  const validateData = ()=>{
    const errors : FormError = {};

    if(!formData.title){
      errors.title = "Product name is required";
    }
    if(!formData.price){
      errors.price = "Product price is required";
    }
    if(!formData.description){
      errors.description = "Description is required";
    }
    if(!formData.categoryId){
      errors.categoryId = "Category is required";
    }
    if(formData.images.length==0){
      errors.images = "Images is required";
    }
    setErrors(errors);
    return Object.keys(errors).length===0;
  }
  return (
    <>
      <div className='flex w-full items-center justify-center h-screen '>
        <div className='border border-stroke w-1/2 rounded-md bg-white p-6 shadow-lg font-mono'>
          <p className='font-bold py-2 text-lg text-left'>Create new products</p>
          {mutation.isSuccess && (<p className='bg-green-100 border border-green-500 py-3 font-bold text-green-700'>Product created successfully.</p>)}
          <form onSubmit={handleSubmit}>
            <div className='mr-2 ml-2 py-2'>
              <p className='text-left text-sm'>Product name</p>
              <input className={`border ${errors.title?"border-red-500 focus:ring-red-300 focus:ring-1":"focus:outline-none focus:ring-0"} rounded-md w-full  bg-transparent py-2 text-base text-body-color px-3`} type="text" placeholder='Product name...' value={formData.title} onChange={(e)=>setFormData({...formData,title:e.target.value})}/>
              {errors.title && (<p className='text-xs text-red-500 text-left'>{errors.title}.</p>)}
            </div>
            <div className='mr-2 ml-2 py-2'>
              <p className='text-left text-sm'>Product Price</p>
              <input className={`border ${errors.price?"border-red-500 focus:ring-red-300 focus:ring-1":" focus:outline-none focus:ring-0"} rounded-md w-full  bg-transparent py-2 text-base text-body-color px-3`} type="number" placeholder='Product price...' value={formData.price?.toString() || ""} onChange={(e)=>setFormData({...formData, price:parseInt( e.target.value)})}/>
              {errors.price && (<p className='text-xs text-red-500 text-left'>{errors.price}.</p>)}
            </div>
            <div className='mr-2 ml-2 py-2'>
              <p className='text-left text-sm'>Description</p>
              <textarea className={`border ${errors.description?"border-red-500 focus:ring-red-300 focus:ring-1":" focus:outline-none focus:ring-0"} rounded-md w-full bg-transparent py-2 px-3 text-base text-body-color h-24 resize-none`} placeholder="Write description here..." value={formData.description} onChange={(e)=>setFormData({...formData,description:e.target.value})}>

              </textarea>
              {errors.description && (<p className='text-xs text-red-500 text-left'>{errors.description}.</p>)}
            </div>
            <div className='mr-2 ml-2 py-2'>
              <p className='text-left text-sm'>Category</p>
              <select className={`border ${errors.categoryId?"border-red-500 focus:ring-red-300 focus:ring-1":" focus:outline-none focus:ring-0"} rounded-md w-full bg-white py-2 px-3 text-base text-gray-700`} value={formData.categoryId?.toString() || ""} onChange={(e)=>setFormData({...formData,categoryId:parseInt(e.target.value)})}>
                <option value="">Select an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              {errors.categoryId && (<p className='text-xs text-red-500 text-left'>{errors.categoryId}.</p>)}
            </div>
            <div className='mr-2 ml-2 py-2'>
              <p className='text-left text-sm'>Image Url</p>
              <input className={`border ${errors.images?"border-red-500 focus:ring-red-300 focus:ring-1":" focus:outline-none focus:ring-0"} rounded-md w-full  bg-transparent py-2 text-base text-body-color px-3`} type="text" placeholder='Image Url...' value={formData.images[0] || ""} onChange={(e)=>setFormData({...formData,images:[e.target.value]})}/>
              {errors.images && (<p className='text-xs text-red-500 text-left'>{errors.images}.</p>)}
            </div>
            <div className='mr-2 ml-2 py-2'>
              <button className='bg-primary-500 w-full text-white py-2 rounded-md hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed' disabled={mutation.isPending} type="submit">
                {mutation.isPending?"Creating...":"Create Product"}
              </button>
             </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default DataMutation;
import Todo from "../../components/todo";
import MenuContext from "../../../contexts/menu-context";
import React,{ useContext } from "react";
import {QueryClient, QueryClientProvider,useQuery} from '@tanstack/react-query';
import {Category} from '../../type'
import {Link, useNavigate} from 'react-router';

export default function Categories(){
    const menuName = useContext(MenuContext)?.menuName;
    
    const {data:categories,isLoading,error}=useQuery({
      queryKey:["categories"],
      queryFn:()=>fetch('https://api.escuelajs.co/api/v1/categories?limit=15')
        .then(
          async(res)=>{
            const data = await res.json();
            return  data as Category[];
          }
        ),
    });
  const navigate = useNavigate();

    return (
      <>
        
        <div className="mt-4 border border-gray-300 rounded shadow overflow-hidden bg-white">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-xl pl-2">Categories</h2>
            <div className="float-right p-4">
                  <Link to="/categories/create" className="bg-primary-500 hover:bg-primary-700 px-4 py-2 text-white rounded cursor-pointer">
                      Create Category
                  </Link>
              </div>
          </div>
          {isLoading?(
              <div className="p-6 text-center">Loading categories...</div>
            ):error?(
             <div className="p-6 text-center text-red-500 font-bold">Error Loading categories...</div>
            ):(
              <div>
                
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Image</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {
                    categories && categories.length > 0 ? (
                    categories?.map((cat: any) => (
                      <tr key={cat.id} className="hover:bg-gray-50">
                        <td className="px-4 py-1 whitespace-nowrap text-sm font-medium text-gray-900 border">{cat.id}</td>
                        <td className="px-4 py-1 whitespace-nowrap text-sm font-medium text-gray-900 border">{cat.name}</td>
                        <td className="px-4 py-1 whitespace-nowrap text-sm font-medium text-gray-900 border">
                          <img src={cat.image} alt={cat.name} className="w-12 h-12 object-cover rounded" />
                        </td>
                        <td className="px-4 py-1 whitespace-nowrap text-sm font-medium text-gray-900 border">
                          <button onClick={()=>navigate(`/categories/edit/${cat.id}`)} className="bg-primary-500 hover:bg-primary-700 px-4 py-2 text-white rounded cursor-pointer">Edit</button>
                        </td>
                      </tr>
                    ))):(
                      <tr>
                      <td
                        colSpan={4}
                        className="px-6 py-4 text-center text-sm text-gray-500"
                      >
                        No categories found
                      </td>
                    </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
      </>
    );
}
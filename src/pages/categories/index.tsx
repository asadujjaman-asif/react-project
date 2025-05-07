import Todo from "../../components/todo";
import MenuContext from "../../../contexts/menu-context";
import React,{ useContext } from "react";
import {QueryClient, QueryClientProvider,useQuery} from '@tanstack/react-query';
import {Category} from '../../type'
import {Link, useNavigate} from 'react-router';
const queryClient = new QueryClient();
const Categories=() =>{
    const menuName = useContext(MenuContext)?.menuName;
    
    /*const {data:categories,isLoading,error}=useQuery({
      queryKey:["categories"],
      queryFn:()=>fetch('https://api.escuelajs.co/api/v1/categories?limit=15')
        .then(
          async(res)=>{
            const data = await res.json();
            return  data as Category;
          }
        ),
    });*/
   // console.log(categories);
   const { data: categories, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await fetch('https://api.escuelajs.co/api/v1/categories?limit=15');
      return res.json();
    },
  });
  const navigate = useNavigate();
  if (isLoading) return <div className="p-4">Loading...</div>;
  if (error instanceof Error) return <div className="p-4 text-red-500">Error: {error.message}</div>;
    return (
      <>
        <h2 className="font-semibold text-xl">{menuName}</h2>

        <div className="mt-4 border border-gray-100 rounded shadow overflow-hidden bg-white">
          {isLoading?(
              <div className="p-6 text-center font-bold">Loading Categories...</div>
            ):error?(
             <div className="p-6 text-center text-red-500 font-bold">Error Loading categories...</div>
            ):(
              <div>
                <div className="float-right p-4">
                    <Link to="/categories/create" className="bg-primary-500 hover:bg-primary-700 px-4 py-2 text-white rounded cursor-pointer">
                       Create Category
                    </Link>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-blue-500">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-blue-100 border">ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-blue-100 border">Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-blue-100 border">Image</th>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-blue-100 border">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {categories.map((cat: any) => (
                      <tr key={cat.id} className="hover:bg-gray-50">
                        <td className="px-4 py-2 border">{cat.id}</td>
                        <td className="px-4 py-2 border">{cat.name}</td>
                        <td className="px-4 py-2 border">
                          <img src={cat.image} alt={cat.name} className="w-12 h-12 object-cover rounded" />
                        </td>
                        <td className="px-4 py-2 border">
                          <button onClick={()=>navigate('/categories/edit')} className="bg-primary-500 hover:bg-primary-700 px-4 py-2 text-white rounded cursor-pointer">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
      </>
    );
}
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Categories />
    </QueryClientProvider>
  );
}
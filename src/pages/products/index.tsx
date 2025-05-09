import Todo from "./../../components/todo";
import MenuContext from "../../../contexts/menu-context";
import React,{ useContext } from "react";

import { useQuery } from "@tanstack/react-query";
import { Product } from "../../type";
import { Link, useNavigate } from "react-router";
export default function Products() {
    const menuName = useContext(MenuContext)?.menuName;
    
    const {
      data: products,
      isLoading,
      error,
    } = useQuery({
      queryKey: ["products"],
      queryFn: () =>
        fetch(
          "https://api.escuelajs.co/api/v1/products/?limit=10"
        ).then(async (res) => {
          const data = await res.json();
          return data as Product[];
        }),
    });
  
    const navigate = useNavigate();
  
    return (
      <>
        
  
        <div className="mt-4 border border-gray-300 rounded shadow overflow-hidden bg-white">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-xl pl-2">Products</h2>
            <div className="float-right p-4">
              <Link
                to="/products/create"
              className="bg-primary-500 hover:bg-primary-700 px-4 py-2 text-white rounded cursor-pointer"
              >
                Create Product
              </Link>
            </div>
          </div>
          {isLoading ? (
            <div className="p-6 text-center">Loading products...</div>
          ) : error ? (
            <div className="p-6 text-center text-red-500">
              Error loading products
            </div>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acton
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products && products.length > 0 ? (
                  products.map((product) => (
                    <tr
                    key={product.id}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
                        {product.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap border">
                        <img
                          src={product.images[0]}
                          alt={product.title}
                          className="h-10 w-10 rounded-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = "/api/placeholder/40/40";
                            e.currentTarget.alt = "Image not available";
                          }}
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border">
                        {product.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
                        {product.category.name}
                      </td>
                      <td className="px-4 py-1 whitespace-nowrap text-sm font-medium text-gray-900 border">
                          <button 
                             onClick={() => navigate(`/products/edit/${product.id}`)} className="bg-primary-500 hover:bg-primary-700 px-4 py-2 text-white rounded cursor-pointer">Edit</button>
                        </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-6 py-4 text-center text-sm text-gray-500"
                    >
                      No products found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </>
    );
}
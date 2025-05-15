import Todo from "./../../components/todo";
import MenuContext from "../../../contexts/menu-context";
import React,{ useContext } from "react";
export default function CreateProduct() {
    const menuName = useContext(MenuContext)?.menuName;
    
    return (
      <>
            <div className="justify-center flex py-5">
                    <div className="space-y-4  border border-gray-200 bg-white rounded shadow p-4 w-1/2">
                        <h2 className="font-semibold text-xl pl-2 justify-center flex">Add new product</h2>
                        <div>
                            <label className="block mb-1">Product name</label>
                            <input
                                className="w-full border border-gray-300 px-2 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                                type="text"
                                placeholder="Product name"
                            />
                        </div>
                        <div>
                            <label className="block mb-1">Price name</label>
                            <input
                                className="w-full border border-gray-300 px-2 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                                type="text"
                                placeholder="Product Price"
                            />
                        </div>
                        <div>
                            <label className="block mb-1">Product Category</label>
                            <input
                                className="w-full border border-gray-300 px-2 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                                type="text"
                                placeholder="Product Category"
                            />
                        </div>
                        <div>
                            <label className="block mb-1">Brand Name</label>
                            <input
                                className="w-full border border-gray-300 px-2 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                                type="text"
                                placeholder="Product Brand"
                            />
                        </div>
                        <div>
                        <label className="block mb-1">Description</label>
                        <textarea
                            className="w-full border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring focus:ring-blue-300"
                            type="text"
                            placeholder="Description"
                        ></textarea>
                        </div>
                        <div>
                            <label className="block mb-1">Image</label>
                            <input
                                className="w-ful"
                                type="file"
                                placeholder="Category Photo"
                            />
                        </div>
                        <button className="bg-primary-300 hover:bg-primary-500 py-3 w-full rounded-md text-purple-100">Submit</button>
                    </div>
            </div>
      </>
    );
}
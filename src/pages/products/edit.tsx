import Todo from "./../../components/todo";
import MenuContext from "../../../contexts/menu-context";
import React,{ useContext } from "react";
export default function EditProduct() {
    const menuName = useContext(MenuContext)?.menuName;
    
    return (
      <>
        <h2 className="font-semibold text-xl">Edit Product</h2>
  
        <div className="mt-4 h-96 border-4 rounded border-dashed border-slate-200 p-6">
          
        </div>
      </>
    );
}
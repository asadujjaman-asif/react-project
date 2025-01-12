import Todo from "./todo.tsx";
import MenuContext from "../../contexts/menu-context";
import { useContext } from "react";
export default function Dashboard() {
    const menuName = useContext(MenuContext)?.menuName;
    
    return (
      <>
        <h2 className="font-semibold text-xl">{menuName}</h2>
  
        <div className="mt-4 h-96 border-4 rounded border-dashed border-slate-200 p-6">
          
        </div>
      </>
    );
  }
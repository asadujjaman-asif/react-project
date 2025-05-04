import React, { useContext } from "react";
import { CiVirus,CiUser,CiShoppingCart,CiDeliveryTruck,CiCircleList,CiDatabase,CiMenuBurger,CiSaveUp1} from 'react-icons/ci';
import { IconType } from "react-icons/lib";
import SidebarContext from "../../contexts/sidebar-context";
import MenuContext from "../../contexts/menu-context";
import {Link} from 'react-router';
type sideBarItemsProps = {
    name: string,
    icon?: IconType,
    isActive?: boolean,
    isCollapsed?: boolean,
    href?: string,
};
export default function sideBarItems({name,icon,href}:sideBarItemsProps){

    const context = useContext(SidebarContext);
    const isCollapsed = context?.isCollapsed;
    //this code for menu context
    const menuContext = useContext(MenuContext);
   // const manageSidebar = menuContext?.manageSidebar(name);
    const manageSidebar=(name:string) => {
        menuContext?.setMenuName(name);
    }
    let isActive = menuContext?.menuName==name ? true : false;
    if(icon){
        return (
            <li className={`group hover:text-primary-500 ${!isCollapsed?"data-[active=true]:bg-primary-50":""} data-[active=true]:text-primary-500 cursor-pointer p-1 rounded-full transition-colors duration-150 `}  data-active={isActive}>
                <Link to={href} onClick={()=>manageSidebar(name)}  className="flex gap-2 items-center text-sm ">
                    <span className="h-5 w-5 flex-shrink-0 group-data-[active=true]:bg-primary-500 flex items-center justify-center rounded-full group-data-[active=true]:text-white">
                    {React.createElement(icon)}
                    </span>
                    {!isCollapsed && <span>{name}</span>}
                </Link>
            </li>
        );
    }
    if(isCollapsed){
        return null;
    }
    return <li className="text-xs tracking-wider uppercase p-2">{name}</li>;
}
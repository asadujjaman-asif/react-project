import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe,faHome} from '@fortawesome/free-solid-svg-icons';
import logoImage from './../assets/images/logoipsum-249.svg';
import SidebarItem from './side-nave';
import menus from '../menu';
import SidebarOverlay from "./sidebar-overlay";
import SidebarContext from "../../contexts/sidebar-context";
import ThemeContext from '../../contexts/theme-context'
import AppLogo from "./app-logo";

type SidebarProps = {
   className?: string;
  };
  
const Sidebar = (props: SidebarProps) => {
    const context = useContext(SidebarContext);
    const isCollapsed = context?.isCollapsed;
    const theme = useContext(ThemeContext)?.theme;
    return (
        <div>
            <aside className={`${isCollapsed?'w-20':'w-64'} h-screen shadow ${theme=='light'?"bg-white text-slate-900":" bg-slate-900 text-slate-100"} transform -translate-x-full md:translate-x-0 hidden md:block transition-margin duration-300 ease-in-out `}>
                <AppLogo />
                <ul className='p-4 space-y-1'>
                    {
                        menus.map((item, index) =>(
                            <SidebarItem 
                                key={index}
                                name={item.name}
                                icon={item.icon}
                                isActive={item.isActive}
                            />
                        ))
                    }
                </ul>
            </aside>
            <SidebarOverlay />
        </div>
    );
};

export default Sidebar;
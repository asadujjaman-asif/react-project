import { CiBellOn,CiMenuBurger,CiCircleChevDown } from 'react-icons/ci';
import NotificationDropdown from './notification-dropdown';
import ProfileDropdown from './profile-dropdown';
import ThemeSwitch from './theme-switch';
import React, { useContext } from 'react';
import { FC, useState } from "react";
import SidebarToggle from "./sidebar-toggle";
import ThemeContext from '../../contexts/theme-context'

type HeaderProps = {
    toggleSidebar:()=> void;
};
const placeHolerColor = {
    width: '318px',
    height: '400px',
};

const Header:FC<HeaderProps> = ()=>{
   const theme = useContext(ThemeContext)?.theme;
   
    return (
        <>
            <header className={`shadow-md ${theme=='light'?"bg-white text-slate-900":" bg-slate-900 text-slate-100"} h-16 px-8 flex items-center relative `}>
                <SidebarToggle/>
                <div className="ms-auto flex items-center gap-6">
                    <ThemeSwitch />
                    <NotificationDropdown />
                    <ProfileDropdown />
                </div>
          </header>
        </>
    );
}
export default Header
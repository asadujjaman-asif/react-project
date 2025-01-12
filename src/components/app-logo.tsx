import React, { useContext } from 'react';
import SidebarContext from "../../contexts/sidebar-context";
import { GiKite } from "react-icons/gi";

const AppLogo = () => {
    const context = useContext(SidebarContext);
    const isCollapsed = context?.isCollapsed;
    return (
        <>
            <div className='h-16 flex gap-2 items-center p-4'>
                <GiKite className="inline-block fill-current text-primary-500 h-10 w-10 border border-spacing-3 border-primary-300 p-1 rounded-full"/>
                {!isCollapsed && (
                    <div>
                        <h4 className="flex"> 
                            <span className='font-bold text-slate-600 dark:text-slate-200'>NeelGhuri</span>
                            <span className='font-bold text-primary-500'>Fashion</span>
                        </h4>
                        <p className="text-sm font-medium text-slate-400 ">Admin Dashboard</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default AppLogo;
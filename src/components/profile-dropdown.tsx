import notificationImg from './../assets/images/avatar04.png';
type ProfileDropdownProps ={};
import { FC, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
const ProfileDropdown:FC<ProfileDropdownProps> = ({})=>{

    const [profileDropdown,setProfileDropdown] = useState(false);
    const manageProfile = () => {

        //notificationDropdown?setNotificationDropdown(false):"";
        setProfileDropdown((prev)=>!prev);
    }

    return (
        <>
            <div className="relative">
                <button className="relative flex text-center" onClick = {()=>manageProfile()}>
                    <img src={notificationImg} alt="admin image" className='h-9 w-9 rounded-full group-focus:ring group-focus:ring-primary-500 gap-2 mr-2' />
                    <div>
                        <p className="text-md font-medium text-slate-600">Asif Islam</p>
                        <p className='text-sm font-medium text-slate-400'>Admin</p>
                    </div>
                        {profileDropdown && (
                            <div className="absolute mt-12 right-5 w-36 animate-fade-in-up overflow-hidden rounded-primary border bg-white shadow-lg dark:border-slate-800 dark:bg-slate-800" >
                                <a className="w-full px-4 py-2 text-left text-sm leading-5 text-slate-800 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none dark:text-slate-300 dark:hover:bg-slate-700 flex items-center gap-3" href="#">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="text-slate-600 dark:text-slate-400" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle></svg>Profile
                                </a>
                                <a className="w-full px-4 py-2 text-left text-sm leading-5 text-slate-800 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none dark:text-slate-300 dark:hover:bg-slate-700 flex items-center gap-3" href="#">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="text-slate-600 dark:text-slate-400" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="3"></circle>
                                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                    </svg>Settings
                                </a>
                                <a className="w-full px-4 py-2 text-left text-sm leading-5 text-slate-800 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none dark:text-slate-300 dark:hover:bg-slate-700 flex items-center gap-3" href="#">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="text-slate-600 dark:text-slate-400" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                        <polyline points="16 17 21 12 16 7"></polyline>
                                        <line x1="21" y1="12" x2="9" y2="12"></line>
                                    </svg>Sign out
                                </a>
                            </div>
                        )}
                </button>
            </div>
        </>
    );
}
export default ProfileDropdown;

import clsx from "clsx";
import { FC, useState } from "react";
import { FiBell,FiClock,FiInfo,FiCheckCircle,FiAlertTriangle,FiAlertOctagon  } from "react-icons/fi";
type NotificationDropdownProps = {};

const NotificationDropdown:FC <NotificationDropdownProps> = ({})=>{

    const [notificationDropdown,setNotificationDropdown] = useState(false);
    const manageNotificationDropdown = () => {
       // profileDropdown?setProfileDropdown(false):"";
        setNotificationDropdown((prev)=>!prev);
    }

    const notifications = [
        {
            id:1,
            title:"New order received",
            description:"Order #624465 has been placed",
            time:"2m ago",
            icon:<FiInfo/>,
            isNew:true,
        },
        {
            id:2,
            title:"New message",
            description:"You have a new message from John Doe",
            time:"2m ago",
            icon:<FiCheckCircle/>,
            isNew:false,
        },
        {
            id:3,
            title:"Sales report is ready",
            description:"Download the lates sales report",
            time:"2h ago",
            icon:<FiAlertTriangle/>,
            isNew:false,
        },
        {
            id:4,
            title:"New customer registered",
            description:"New customer has registered",
            time:"2m ago",
            icon:<FiAlertOctagon/>,
            isNew:false,
        },
        {
            id:5,
            title:"Order completed",
            description:"Order #624464 has been delivered",
            time:"2m ago",
            icon:<FiCheckCircle/>,
            isNew:false,
        },
        {
            id:6,
            title:"Something went wrong",
            description:"Order #624461 has been canceled",
            time:"1h ago",
            icon:<FiAlertOctagon/>,
            isNew:false,
        }
    ];
    return (
        <>
            <div className="relative flex items-center">
                <button className="relative hover:text-primary-500 hover:bg-primary-50 p-2 rounded-full transition-colors duration-150hover:text-primary-500" onClick={()=>manageNotificationDropdown()}>
                    <FiBell size={24}/>
                    <span className="inline-block  h-4 w-4 bg-primary-500 text-xs rounded-full text-white absolute -top-1 -right-1">
                        3
                    </span>
                    {notificationDropdown && (
                    <div className="absolute  right-0 mt-6  w-80  animate-fade-in-up overflow-hidden rounded-primary border bg-white shadow-lg dark:border-slate-800 dark:bg-slate-800 divide-y dark:divide-slate-700">
                        <div className="flex items-center justify-between px-4 py-4">
                            <h5 className="font-semibold text-slate-800">Notification</h5>
                            <button className='text-xs text-slate-800 hover:text-primary-500'>Clear All</button>
                        </div>
                        <div className='simplebar-scrollable-y'>
                            <div className='simplebar-wrapper'>
                                <div className='simplebar-height-auto-observer-wrapper'>
                                    <div className='simplebar-height-auto-observer'></div>
                                </div>
                                <div className='simplebar-mask'>
                                    <div className='simplebar-offset'>
                                        <div className='simplebar-content-wrapper'>
                                            <div className='simplebar-content'>
                                                <ul>
                                                    {
                                                        notifications.map((notification)=>(
                                                            <li className='flex cursor-pointer gap-4 px-4 py-3 transition-colors duration-150 hover:bg-slate-50 dark:hover:bg-slate-700'>
                                                                <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${notification.isNew?" text-blue-500 bg-blue-100":" text-yellow-500 bg-yellow-100"}`}>
                                                                    {notification.icon}
                                                                </div>
                                                                <div>
                                                                    <h6 className='text-sm'>{notification.title}</h6>
                                                                    <p className='text-xs text-slate-400'>{notification.description}</p>
                                                                    <p className='mt-1 flex items-center gap-1 text-xs text-slate-400'>
                                                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                            <circle cx="12" cy="12" r="10"></circle>
                                                                            <polyline points="12 6 12 12 16 14"></polyline>
                                                                        </svg>
                                                                        {notification.time}
                                                                    </p>
                                                                </div>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="px-4 py-2  text-center">
                            <button className="btn btn-primary-plain btn-sm w-full" type="button">
                                <span className="text-sm">View more </span>
                            </button>
                        </div>
                    </div>)}
                </button>
            </div>
        </>
    );
}
export default NotificationDropdown;

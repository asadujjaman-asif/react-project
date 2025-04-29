import React from 'react';
import {twMerge} from 'tailwind-merge'

export default function withstyle(Component:React.FC){
    return (props:any)=>{
        const className = twMerge(
            props.className,
            "border border-gray-300 rounded w-full px-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        );
        const style = {
            ...props.style,
        }
        return <Component {...props} className={className} style={style}/>
    }
}
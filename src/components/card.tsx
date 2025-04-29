import React, {FC} from 'react';
import {twMerge} from 'tailwind-merge';

type CardProps = {} & React.HTMLAttributes<HTMLDivElement>;

const CardBased:FC<CardProps> = ({className,children,...props})=>{
    return (
        <div className={twMerge("bg-white shadow-md rounded-md border border-gray-300",className)} {...props}>
            {children}
        </div>
    );
};
const CardHeader:FC<CardProps> = ({className,children,...props})=>{
    return (
        <div className={twMerge("p-4 border-b border-gray-300",className)} {...props}>
            {children}
        </div>
    );
};
const CardBody:FC<CardProps> = ({className,children,...props})=>{
    return (
        <div className={twMerge("p-4",className)} {...props}>
            {children}
        </div>
    );
};
const CardTitle:FC<CardProps> = ({className,children,...props})=>{
    return (
        <h1 className={twMerge("font-bold text-xl",className)} {...props}>
            {children}
        </h1>
    );
};
const CardFooter:FC<CardProps> = ({className,children,...props})=>{
    return (
        <div className={twMerge("p-4 border-t border-gray-300",className)} {...props}>
            {children}
        </div>
    );
};
const Card = Object.assign(CardBased,{Header:CardHeader,Body:CardBody,Title:CardTitle,Footer:CardFooter});
export default Card;
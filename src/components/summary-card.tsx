import {React, FC} from 'react'
import { twMerge } from "tailwind-merge";
type SummaryProps ={
  value: string;
  unit:string;
} & React.HTMLAttributes<HTMLDivElement>;

const SummaryCard:FC<SummaryProps>=({value,unit,className,...rest})=>
{
  return (
    <div className={twMerge("border p-4 rounded  flex flex-col h-28 items-center justify-center",className)} {...rest}>
    <span className="">{value}</span>
    <span className="">{unit}</span>
    </div>
  );
};

export default SummaryCard

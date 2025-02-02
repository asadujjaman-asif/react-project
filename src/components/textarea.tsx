import {React,FC} from 'react'
import { twMerge } from "tailwind-merge";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea : FC<TextareaProps> = ({className, ...rest}) => {
  return (
    <textarea className={twMerge("w-full px-4 py-2 border rounded-lg text-sm text-slate-800 placeholder-slate-300 focus:border-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-600 disabled:cursor-not-allowed disabled:opacity-50",className)} {...rest}>

    </textarea>
  )
}

export default Textarea
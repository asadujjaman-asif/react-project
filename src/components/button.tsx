import React, {FC} from 'react';
import WithStyle from './with-style'
import {twMerge} from 'tailwind-merge'

type InputProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<InputProps> = (props)=>{
    return <button {...props} className={twMerge(props.className,"bg-blue-500 text-white hover:bg-blue-600 ring-offset-1")}/>;
}
export default WithStyle(Button);

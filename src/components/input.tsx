import React, {FC} from 'react';
import WithStyle from './with-style'

type InputProps = {} & React.InputHTMLAttributes<HTMLInputElement>

const Input: FC<InputProps> = (props)=>{
    return <input {...props} />;
}
export default WithStyle(Input);

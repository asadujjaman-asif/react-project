import React, { FC } from 'react';

import WithStyle from './with-style'

type TextAreaProps = {} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea: FC<TextAreaProps> = (props) => {
  return <textarea {...props} />;
};

export default WithStyle(TextArea);

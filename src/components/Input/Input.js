import React from 'react';
import './Input.css';

const Input = (props) => {
  const { variant = 'medium', children, ...rest } = props;

  return (
    <input {...rest} className={`input ${variant}`}>
      {children}
    </input>
  );
};

export default Input;

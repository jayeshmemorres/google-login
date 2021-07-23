import React from 'react';

const Input = (props) => {
const{type,name,placeholder,value ,className,onChange}=props
    return (
        <div>
          <input type={type} value={value}  name={name} placeholder={placeholder} onChange={onChange} className={className}/>
        </div>
    );
};

export default Input;
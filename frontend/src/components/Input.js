import React from 'react';


const Input = ({ disabled = false, className, ...props }) => (
    <input
        disabled={disabled}
        className={`${className} rounded-md shadow-sm border-gray-300`}
        {...props}
    />
)

export default Input

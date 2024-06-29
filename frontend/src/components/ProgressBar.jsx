import React from 'react';

function ProgressBar({ width, className = '', ...props }) {
    return (
        <div className={`overflow-hidden rounded-full bg-[#EFF0F6] ${className}`} {...props}>
            <div
                className="h-2 rounded-full bg-[#D1B096]" 
                style={{ width: `${width}%` }}
                
            ></div>
        </div>
    );
}

export default ProgressBar;

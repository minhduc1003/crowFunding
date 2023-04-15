import React from 'react';

const Button = ({children,className}) => {
    return (
        <button className={`bg-secondary outline-none text-white rounded-lg px-6 py-3 ${className}`}>
        {children}
      </button>
    );
};

export default Button;
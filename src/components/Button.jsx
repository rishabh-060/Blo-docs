import React from 'react'

const Button = ({
    children,
    type = 'button',
    bgColor = 'bg-fuchsia-900',
    textColor = 'text-white',
    className = '',
    ...props
}) => {
  
  return (
    <button
        className={`px-6 py-1.5 rounded-lg ${className} ${bgColor} ${textColor}`}
        {...props}
    >
        {children}
    </button>
  )
}

export default Button
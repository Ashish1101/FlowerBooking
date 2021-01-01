import React from 'react'

const Button = (props) => {
    return (
        <button className="text-center w-32 h-8 text-gray-800 text-xs font-medium bg-gradient-to-r from-purple-500 to-white focus:outline-none rounded hover:from-blue-400 hover:to-white"
        {...props}
        >
            {props.children}
        </button>
    )
}

export default Button

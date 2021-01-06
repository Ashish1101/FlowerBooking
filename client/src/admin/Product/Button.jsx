import React from 'react'
const Button = (props) => {
    return (
        <button {...props} className={` h-8 w-full text-xs rounded-md  focus:outline-none my-1 md:mx-1 bg-${props.color}-400 ring-1 ring-${props.color}-300 hover:bg-white text-white hover:text-${props.color}-300`}>
           {props.children}
        </button>
    )
}

export default Button
import React from 'react'

const Card = ({name , img , price}) => {
    return (
        <div className="mb-8">
            <img className="h-24 w-32 object-cover" alt="1" src={img} /> 
            <div>
                <p>{name}</p>
                <button className="bg-green-500">Edit</button>
                <button className="bg-red-500">Delete</button>
            </div>
        </div>
    )
}

export default Card

import React from 'react'

const RightLayout = () => {
    return (
        <div className="flex flex-col mt-2 space-y-12">
            <div className="flex justify-evenly">
               <h3 className="text-sm text-purple-400">Welcome Shivam</h3>
               <img src={'https://images.pexels.com/users/avatars/5304652/ashish-shakya-224.jpeg?auto=compress&fit=crop&h=256&w=256'} alt="1"  className="rounded-full h-10 w-10 object-cover" />
            </div>
            <div className="">
                <h3 className="pb-2 text-purple-400 font-semibold">Chat</h3>
                <ul>
                    <li>Shivam</li>
                    <li>Ashish</li>

                </ul>
            </div>
        </div>
    )
}

export default RightLayout

import React from 'react';
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

const Help = () => {
    return (
        <>
            <div className="flex h-full p-4 gap-y-6">
                <ul className='space-y-3'>
                    <li className='text-gray-700 hover:text-blue-500 cursor-pointer'>
                        <div className='flex items-center gap-x-2'>
                            <IoMdHelpCircleOutline />
                            <h5>Help & Information</h5>
                        </div>
                    </li>
                    <li className='text-gray-700 hover:text-blue-500 cursor-pointer'>
                        <div className='flex items-center gap-x-2'>
                            <IoIosLogOut />
                            <h5>Logout</h5>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Help;
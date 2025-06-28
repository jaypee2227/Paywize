import React from 'react';
import { FaRegThumbsUp } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { CiCircleChevUp, CiCircleChevDown  } from "react-icons/ci";

const Tasks = () => {
    return (
        <>
            <hr className='border-solid shadow-xs border-gray-300 w-[60%] ml-[12.5%] mt-4 mr-[12%]'/>
                <div className='flex items-center justify-center mt-4 space-x-10'>
                    <div className='flex justify-center items-center space-x-2'>
                            <FaRegThumbsUp className='text-6xl' />
                        <div className='space-y-3'>
                            <span className='text-gray-900 font-bold'>Finished</span>
                            <div className='flex items-center justify-center'>
                                <span className='font-bold'>18</span>
                                <div className='flex items-center justify-center ml-1'>
                                    <CiCircleChevUp className='text-green-500 ml-1' />
                                    <span className='text-green-600 text-xs/3'>8 tasks</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center space-x-3'>
                        <div>
                            <MdTimer className='text-6xl'/>
                        </div>
                        <div className='space-y-3'>
                            <span className='font-bold'>Tracked</span>
                            <div className='flex items-center justify-center'>
                                <span className='font-bold'>31h</span>
                                <div className='flex items-center justify-center'>
                                    <CiCircleChevDown className='text-red-500 ml-1' />
                                    <span className='text-red-600 text-xs/3'>-6 hours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center space-x-3'>
                        <div>
                            <BsGraphUp className="text-6xl"/>
                        </div>
                        <div className='space-y-3'>
                            <span className='font-bold'>Efficiency</span>
                            <div className='flex items-center justify-center'>
                                <span className='font-bold'>98%</span>
                                <div className='flex items-center justify-center ml-1'>
                                    <CiCircleChevUp className='text-green-500 ml-1' />
                                    <span className='text-green-600 text-xs/3'>12%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <hr className='border-solid shadow-xs border-gray-300 w-[60%] ml-[12.5%] mt-4 mr-[12%]'/>
        </>
    )
}

export default Tasks;
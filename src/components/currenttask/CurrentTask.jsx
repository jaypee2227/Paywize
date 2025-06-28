import React from "react";
import { FaAppStore } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";
import { SiVoidlinux } from "react-icons/si";

const CurrentTask = () => {
    return (
        <>
            <div className="mt-4 ml-4 ">
                <div className="flex items-center justify-between p-4">
                    <h1 className="text-2xl font-bold">
                        Current Task
                    </h1>
                    <span>
                        Done 30%
                    </span>
                    <select className="border border-gray-200 rounded-l2 p-1 text-gray-700">
                        <option>Days</option>
                        <option>Weeks</option>
                        <option>Months</option>
                        <option>Years</option>
                    </select>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <div className="flex space-x-20">
                        <div className="flex items-center justify-between space-x-1">
                            <FaAppStore className="text-xl text-gray-500" />
                            <span className="text-xs">App Design & Development</span>
                        </div>
                        <div className="flex items-center justify-between space-x-1 ml-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-xs text-green-600">Completed</span>
                        </div>
                        <div className="flex items-center justify-between space-x-1 ml-2">
                            <CiClock2 className="text-xs text-gray-500"/>
                            <span className="text-xs">4h</span>
                        </div>
                        <div className="flex items-center justify-between space-x-1 ml-2">
                            <IoIosMore className="text-xs text-gray-500" />
                            <span className="text-xs">More</span>
                        </div>
                    </div>
                    {/* <div className="flex ml-4 space-x-15 w-full">
                        <div className="flex items-center justify-between space-x-1">
                            <SiVoidlinux className="text-xs text-gray-500" />
                            <span className="text-xs">UX Research for Product</span>
                        </div>
                        <div className="flex items-center justify-between space-x-1 ml-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-xs text-yellow-600">In Progress</span>
                        </div>
                        <div className="flex items-center justify-between space-x-1 ml-2">
                            <CiClock2 className="text-xs text-gray-500"/>
                            <span className="text-xs">2h</span>
                        </div>
                        <div className="flex items-center justify-between space-x-1 ml-2">
                            <IoIosMore className="text-xs text-gray-500" />
                            <span className="text-xs">More</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default CurrentTask;
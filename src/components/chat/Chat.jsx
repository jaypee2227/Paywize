import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa6";
import { MdMoreVert } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { CgAttachment } from "react-icons/cg";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";

const Chart = () => {
    return (
        <>
            <div className="w-[25%] border-solid border-gray-300 shadow-lg flex flex-col items-center bg-gary-600">
                <div className="flex flex-col items-center justify-center mt-4 bg-gray-400 rounded-lg m-1 h-50 w-60">
                    <div className="flex flex-col items-center justify-center">
                        <FaUserCircle className="text-6xl"/>
                        <h3>Megan Norton</h3>
                        <span className="text-xs text-gray-500">@MegaNor</span>
                    </div>
                    <div className="flex items-center justify-between mt-4 space-x-4">
                        <IoCall className="text-2xl"/>
                        <FaVideo className="text-2xl"/>
                        <MdMoreVert className="text-2xl"/>
                    </div>
                </div>
                <span className="mt-2">-------Activity-------</span>
                <div className="flex flex-col mt-3 static">
                    <div className="flex space-x-10">
                        <FaUserCircle className="text-3xl"/>
                        <div className="flex flex-col items-center justify-start">
                            <p className="text-xs font-bold">Floyd Miles</p>
                            <span className="text-[10px]">commented on <i>starck project</i></span>
                        </div>
                        <span className="text-[8px]">10:15 AM</span>
                    </div>
                    <div className="h-20 w-50 absolute bg-blue-200 right-15 top-88 rounded-lg mt-2">
                        <span className="text-[15px]">Hi! Next we will start a new project. I will tell you all the details later.</span>
                    </div>
                        <div className="flex flex-col mt-3 static">
                            <div className="flex space-x-10 absolute top-112">
                                <FaRegUserCircle className="text-3xl"/>
                                <div className="flex flex-col items-center justify-start">
                                    <p className="text-xs font-bold">Guy Hawkins</p>
                                    <span className="text-[10px]">Added a file to <i>Heros Project</i></span>
                                </div>
                                <span className="text-[8px]">10:15 AM</span>
                            </div>
                            <div className="h-20 w-50 absolute bg-gray-200 right-15 top-122 rounded-lg mt-2 flex items-center justify-center space-x-8">
                                <FaFileAlt className="text-3xl"/>
                                <div className="flex flex-col items-center justify-between">
                                    <p className="text-xs">Homepage.fig</p>
                                    <span className="text-[10px]">298.03 Mb</span>
                                </div>
                                <MdFileDownload className="text-2xl"/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center absolute top-150 bg-gray-300 rounded-lg mt-6 mb-6 p-1 space-x-2">
                            <CgAttachment className="text-xl"/>
                            <input type="text" className="focus:outline-none focus:ring-0" placeholder="write a message"/>
                            <MdOutlineEmojiEmotions className="text-xl"/>
                            <IoIosAdd className="text-xl"/>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Chart;
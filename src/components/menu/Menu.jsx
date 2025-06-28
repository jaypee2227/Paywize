import React from "react";
import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { FaTasks } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";

const Menu = () => {
  return (
    <div className="flex h-full p-4 gap-y-4">
      <ul className="space-y-3">
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">
            <div className="flex justify-center items-center gap-x-2">
                <FaHome className="me-3 text-lg"/>
                <h5>Home</h5>
            </div>
        </li>
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">
            <div className="w-full flex items-center justify-between gap-x-2">
                <GrProjects className=" me-3 text-sm"/>
                <h5>Projects</h5>
            </div>
        </li>
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">
            <div className="gap-x-2 flex items-center justify-between">
                <FaTasks className="text-sm"/>
                <h5>Tasks</h5>
            </div>
        </li>
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">
            <div className="flex items-center justify-between gap-x-2">
                <GiTeamIdea className="text-lg" />
                <h5>Team</h5>
            </div>
        </li>
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">
            <div className="flex items-center justify-between gap-x-2">
                <CiSettings className="text-lg" />
                <h5>Setting</h5>
            </div>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
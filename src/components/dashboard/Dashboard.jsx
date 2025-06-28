import React from "react";
import Tasks from "../tasks/Tasks";
import { SlCalender } from "react-icons/sl";
import Chart from "../chart/Chart";
import CurrentTask from "../currenttask/CurrentTask";

const Dashboard = () => {
    return (
        <>
            <div className="w-[50%]">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 mt-2 ml-2">
                            Hello, Margarate
                        </h1>
                        <span className="space-y-1 text-gray-600 ml-3 mt-2">
                            Tack team progress here, you almost reach a goal!
                        </span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 mr-2">
                        <p>16 May, 2023</p>
                        <SlCalender />
                    </div>
                </div>
                <Tasks />
                <Chart />
                <CurrentTask />
            </div>
        </>
    )
}

export default Dashboard;
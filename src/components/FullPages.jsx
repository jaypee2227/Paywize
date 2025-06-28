import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Dashboard from "./dashboard/Dashboard";
import Chat from "./chat/Chat";

const FullPages = () => {
  return (
    <>
        <div className="flex bg-white-100">
            <Sidebar /> 
            <Dashboard />
            <Chat />
        </div>
    </>
  );
}

export default FullPages;
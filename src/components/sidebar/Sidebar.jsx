import React from "react";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import Upgrade from "../upgarde/Upgrade";
import Help from "../help/Help";

const Sidebar = () => {
  return (
    <div className="w-[25%] h-screen border-solid border-gray-300 shadow-lg flex flex-col items-center justify-between">
        <Logo/>
        <Menu />
        <Upgrade />
        <Help />
    </div>
  );
}

export default Sidebar;
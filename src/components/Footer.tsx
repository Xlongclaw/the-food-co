import React from "react";
import { Logo } from "./navbar-elements";

const Footer: React.FC = () => {
  return <div className="bg-color1 gap-4 md:gap-32 h-[10rem] w-full flex flex-col md:flex-row justify-center items-center">
    <Logo white/>
    <h4 className="text-white">DEVELOPER : <span className="bold-font text-2xl">xlongclaw</span></h4>
  </div>;
};

export default Footer;

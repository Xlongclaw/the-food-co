import React from "react";
import { Logo, MenuButton, NavBarLinks } from "./navbar-elements";

const NavBar: React.FC = () => {
  return (
    <div className={`h-[4rem] sm:h-[5rem] flex justify-between items-center pr-8 sm:pr-16 md:pr-16 lg:pr-32 transition-all duration-700`}>
      <div className="flex h-full gap-16 lg:gap-24 items-center transition-all duration-700">
        <MenuButton />
        <Logo />
      </div>
      <NavBarLinks />
    </div>
  );
};

export default NavBar;

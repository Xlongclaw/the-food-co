import React from "react";
import { navBarLinks } from "../../constants";
import { NavLink } from "react-router-dom";

const NavBarLinks: React.FC = () => {
  return (
    <div className="hidden lg:flex">
    <div className="flex gap-12 font-bold items-center">
      {navBarLinks.map((current) => (
        <>
          <NavLink key={current.title} to={current.link} >{current.title}</NavLink>
        </>
      ))}
    </div>
    </div>
  );
};

export default NavBarLinks;

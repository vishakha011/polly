import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ name, path }) => {
  return (
    <Link to={path} className="font-mono text-3xl font-bold cursor-pointer">
      {name}
    </Link>
  );
};

export default NavItem;

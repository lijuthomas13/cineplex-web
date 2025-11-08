import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="space-x-4 mb-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-semibold border-b-2 border-blue-600"
            : "text-gray-500 hover:text-blue-500"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/my-tickets"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-semibold border-b-2 border-blue-600"
            : "text-gray-500 hover:text-blue-500"
        }
      >
        My Tickets
      </NavLink>
    </nav>
  );
};

export default NavBar;

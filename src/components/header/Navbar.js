import React, { useRef } from "react";
import { LeftNavbar } from "./LeftNavbar";
import { RightNavbar } from "./RightNavbar";

export const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="navbar">
          <LeftNavbar />
          <RightNavbar />
        </div>
      </nav>
    </header>
  );
};

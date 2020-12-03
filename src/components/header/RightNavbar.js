import React, { useState } from "react";

export const RightNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="navbar-right">
        <ul className="navbar-nav overlay-content">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">Create new blog</a>
          </li>
        </ul>
      </div>
    </>
  );
};

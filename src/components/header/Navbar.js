import React from "react";
import { HiSearch } from "react-icons/hi";

export const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="navbar">
          <a href="#" className="navbar-brand">
            Blog
          </a>
          <form className="navbar-search" autoComplete="off">
            <input type="search" placeholder="Search" aria-label="Search" />
            <button type="submit">
              <HiSearch />
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

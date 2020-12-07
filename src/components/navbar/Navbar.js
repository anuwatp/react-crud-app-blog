import React from "react";
import { HeaderSearch } from "./HeaderSearch";
import { Burger } from "./Burger";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  background-color: #14181d;
  align-items: center;
  justify-content: space-evenly;
  margin: auto;
  position: fixed;
  min-width: 100%;
  z-index: 1;

  .navbar-container {
    display: flex;
    width: 60%;
    align-items: center;
    justify-content: space-between;
  }

  .navbar-logo {
    font-size: 1.5rem;
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0;
    .navbar-container {
      width: 100%;
    }

    .navbar-logo {
      margin-left: 1rem;
    }
  }
`;

export const Navbar = () => {
  return (
    <header>
      {/* <nav className="navbar"> */}
      <Nav>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Blog
          </Link>
          <HeaderSearch />
          <Burger />
        </div>
      </Nav>
      {/* </nav> */}
    </header>
  );
};

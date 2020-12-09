import React from "react";
import { HiSearch } from "react-icons/hi";
import styled from "styled-components";

const NavbarSearch = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  margin-left: 1rem;

  input[type="search"] {
    padding: 6px;
    padding-left: 50px;
    border: 2px solid #14181d;
    border-radius: 3px;
    width: 20rem;

    &:focus {
      border: 2px solid #29a9f3;
    }
  }

  button {
    padding: 3.2px 10px;
    background-color: #29a9f3;
    border: none;
    border-radius: 1px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    cursor: pointer;
    position: absolute;
    left: 1.5px;
    top: 1.6px;

    svg {
      fill: #fff;
      height: 1.2rem;
      width: 1.2rem;
    }
  }

  @media (max-width: 640px) {
    input[type="search"] {
      width: 14rem;
    }
  }
`;

export const HeaderSearch = () => {
  return (
    <NavbarSearch>
      <form>
        <input
          type="search"
          placeholder="Search blogs here"
          aria-label="Search blogs here"
        />
        <button type="submit">
          <HiSearch />
        </button>
      </form>
    </NavbarSearch>
  );
};

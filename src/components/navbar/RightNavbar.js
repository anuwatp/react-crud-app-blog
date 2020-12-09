import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    cursor: pointer;
  }

  a {
    color: white;
  }

  li,
  a {
    &:hover {
      color: #29a9f3;
    }
  }

  .navbar-new_blog {
    a {
      color: #2191f1;
      &:hover {
        color: #fff;
      }
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #14181d;
    z-index: 19;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding: 2rem;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;

      &:nth-child(1) {
        margin-top: 1rem;
      }
    }

    .navbar-new_blog {
      a {
        display: block;
        margin-top: 1.5rem;
        &::before {
          content: "+ ";
        }
      }
      &::before {
        content: "";
        border-top: 1px solid #787a8a;
        width: 100%;
        display: block;
      }
    }
  }
`;

export const RightNavbar = ({ open }) => {
  return (
    <>
      <div className="navbar-right">
        <Ul open={open}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link className="disabled" to="/">
              Categories
            </Link>
          </li>
          <li className="navbar-new_blog">
            <Link to="/new">New blog</Link>
          </li>
        </Ul>
      </div>
    </>
  );
};

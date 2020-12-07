import React, { useContext } from "react";
import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const BtnEditDelete = styled.div`
  cursor: pointer;
  float: right;
  font-size: 2rem;
  line-height: 2;

  .btnDelete {
    margin-left: 1rem;
  }

  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

export const BlogList = () => {
  const { blogs, removeBlog } = useContext(GlobalContext);

  return (
    <section className="article-container">
      {blogs.length > 0 ? (
        <>
          {blogs.map((blog) => (
            <article className="article-card" key={blog.id}>
              <header className="article-header">
                <h2>
                  <Link to="/">{blog.title}</Link>
                  <BtnEditDelete>
                    <Link to={`/edit/${blog.id}`} className="btnEdit">
                      <BsPencilSquare />
                    </Link>
                    <Link
                      to="/"
                      className="btnDelete"
                      onClick={() => removeBlog(blog.id)}
                    >
                      <BsTrash />
                    </Link>
                  </BtnEditDelete>
                </h2>
                <time dateTime="2020-12-03">{blog.created}</time>
              </header>
              <div className="article-content">
                <p>{blog.content}</p>
                <Link to="/" className="btn">
                  Read more
                  <BsArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </>
      ) : (
        <h2 style={{ fontSize: "3rem" }}>No blogs</h2>
      )}
    </section>
  );
};

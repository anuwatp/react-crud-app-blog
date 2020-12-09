import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

export const AddBlog = () => {
  const { addBlog, blogs } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  let history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: blogs.length + 1,
      title,
      content,
      created: "January 1, 1990",
    };
    addBlog(newBlog);
    history.push("/");
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="blog_form">
        <div className="form-group">
          <label htmlFor="title">New blog title</label>
          <input
            required
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Blog content</label>
          <textarea
            required
            name="content"
            id=""
            cols="30"
            rows="10"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="btn-form_group">
          <button>Publish</button>
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

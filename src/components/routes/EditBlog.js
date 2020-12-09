import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

export const EditBlog = (route) => {
  let history = useHistory();
  const { blogs, editBlog } = useContext(GlobalContext);
  const [selectedBlog, setSelectedBlog] = useState({
    id: null,
    title: "",
    content: "",
    created: "",
  });
  // Find the selected blog id
  const currentBlogId = route.match.params.id;

  useEffect(() => {
    const blogId = currentBlogId;
    const selectedBlog = blogs.find((blog) => blog.id === parseInt(blogId));
    setSelectedBlog(selectedBlog);
    // Cleaning up the old values
    return () => {};
  }, [blogs, currentBlogId]);

  const onSubmit = (e) => {
    e.preventDefault();
    editBlog(selectedBlog);
    history.push("/");
  };

  const handleOnChange = (blogKey, value) =>
    setSelectedBlog({ ...selectedBlog, [blogKey]: value });

  if (!selectedBlog || !selectedBlog.id) {
    return <div></div>;
  }

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="blog_form">
        <div className="form-group">
          <label htmlFor="title">Edit blog title</label>
          <input
            required
            name="title"
            type="text"
            value={selectedBlog.title}
            onChange={(e) => handleOnChange("title", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Edit blog content</label>
          <textarea
            required
            name="content"
            id=""
            cols="30"
            rows="10"
            onChange={(e) => handleOnChange("content", e.target.value)}
            defaultValue={selectedBlog.content}
          ></textarea>
        </div>
        <div className="btn-form_group">
          <button>Save</button>
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

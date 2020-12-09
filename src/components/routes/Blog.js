import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";

export const Blog = (route) => {
  const { blogs } = useContext(GlobalContext);
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

  return (
    <main>
      <div className="container">
        <header>
          <h1>{selectedBlog.title}</h1>
        </header>
        <article className="article-container" style={{ marginTop: "4rem" }}>
          <p>{selectedBlog.content}</p>
        </article>
      </div>
    </main>
  );
};

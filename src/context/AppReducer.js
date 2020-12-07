const AppReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_BLOG":
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog.id !== action.payload),
      };
    case "ADD_BLOG":
      return {
        ...state,
        blogs: [action.payload, ...state.blogs],
      };
    case "EDIT_BLOG":
      const updatedBlog = action.payload;
      const updatedBlogs = state.blogs.map((blog) => {
        if (blog.id === updatedBlog.id) {
          return updatedBlog;
        }
        return blog;
      });
      return {
        ...state,
        blogs: updatedBlogs,
      };

    default:
      return state;
  }
};

export default AppReducer;

import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  blogs: [
    {
      id: 1,
      title: "Blog 1",
      content:
        "Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow equal an share least...",
      created: "December 3, 2020",
    },
    {
      id: 2,
      title: "Blog 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, laborum quia exercitationem placeat quod neque asperiores dolores, at earum molestiae iusto inventore nulla labore rem totam ducimus esse nam ipsum quis error. Dolor sed, consequuntur ipsum rem nostrum ex corporis deleniti saepe exercitationem odit, culpa obcaecati amet vitae odio adipisci...",
      created: "December 6, 2020",
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function removeBlog(id) {
    dispatch({
      type: "REMOVE_BLOG",
      payload: id,
    });
  }

  function addBlog(blog) {
    dispatch({
      type: "ADD_BLOG",
      payload: blog,
    });
  }

  function editBlog(blog) {
    dispatch({
      type: "EDIT_BLOG",
      payload: blog,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        blogs: state.blogs,
        removeBlog,
        addBlog,
        editBlog,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

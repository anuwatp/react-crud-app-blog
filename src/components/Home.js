import React from "react";
import { Heading } from "./header/Heading";
import { BlogList } from "./BlogList";

export const Home = () => {
  return (
    <main id="home">
      <section className="container">
        <Heading />
        <BlogList />
      </section>
    </main>
  );
};
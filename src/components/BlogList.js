import React from "react";
import { BsArrowRight } from "react-icons/bs";

export const BlogList = () => {
  return (
    <section className="article-container">
      <article className="article-card">
        <header className="article-header">
          <h2>
            <a href="#">Blog 1</a>
          </h2>
          <time dateTime="2020-12-03">December 3, 2020</time>
        </header>
        <div className="article-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            laborum quia exercitationem placeat quod neque asperiores dolores,
            at earum molestiae iusto inventore nulla labore rem totam ducimus
            esse nam ipsum quis error. Dolor sed, consequuntur ipsum rem nostrum
            ex corporis deleniti saepe exercitationem odit, culpa obcaecati amet
            vitae odio adipisci.
          </p>
          <a className="btn" href="#">
            Read more
            <BsArrowRight />
          </a>
        </div>
      </article>
      <article className="article-card">
        <header className="article-header">
          <h2>
            <a href="#">Blog 2</a>
          </h2>
          <time dateTime="2020-12-03">December 3, 2020</time>
        </header>
        <div className="article-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            laborum quia exercitationem placeat quod neque asperiores dolores,
            at earum molestiae iusto inventore nulla labore rem totam ducimus
            esse nam ipsum quis error. Dolor sed, consequuntur ipsum rem nostrum
            ex corporis deleniti saepe exercitationem odit, culpa obcaecati amet
            vitae odio adipisci.
          </p>
          <a className="btn" href="#">
            Read more
          </a>
        </div>
      </article>
    </section>
  );
};

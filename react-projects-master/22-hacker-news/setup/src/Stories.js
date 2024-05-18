import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { isLoading, hits } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="stories">
      {hits.map((story) => {
        const  
           return <article className="story">single story</article>;
      })}
    </section>
  );
};

export default Stories;

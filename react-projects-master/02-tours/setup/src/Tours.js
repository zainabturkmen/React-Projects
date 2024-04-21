import React, { useState } from "react";
import Tour from "./Tour";
const Tours = ({ tours }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <section>
      <div className="title">
        <h2>ours tours</h2>
        <div className="underline"></div>
        <div>
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
 
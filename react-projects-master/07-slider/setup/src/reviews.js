import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import Icons from "./icons";

const Review = ({ people, index, setIndex }) => {
  return (
    <div className="section-center">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        // more stuff coming here
        let position = "nextSlide";
        if (personIndex === index) {
          position = "activeSlide";
        }

        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = "lastIndex";
        }
        return (
          <article key={id} className={position}>
            <img src={image} alt={name} className="person-img" />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}

      <Icons setIndex={setIndex}  index={index}/>
    </div>
  );
};
export default Review;


import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Icons = ({index, setIndex }) => {
  return (
    <>
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </>
  );
};

export default Icons
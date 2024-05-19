import React from "react";
import { useGlobalContext } from "./context";

const Buttons = ({ isLoading, page, nbPages, handlePage }) => {
  return (
    <div className="btn-container">
      <button disabled={isLoading} onClick={() => handlePage("dec")}>
        prev
      </button>
      <p>some values</p>
      <button disabled={isLoading} onClick={() => handlePage("inc")}>
        next
      </button>
    </div>
  );
};

export default Buttons;

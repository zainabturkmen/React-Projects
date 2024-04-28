import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, globalContext } from "./context";

const Home = () => {
  const data = globalContext();
  console.log(data);
  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button   className="btn">SHOW Modal</button>
    </main>
  );
};

export default Home;

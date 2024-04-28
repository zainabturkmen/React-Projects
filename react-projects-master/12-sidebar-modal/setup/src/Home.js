import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import {AppContext} from "./context"

const Home = () => {
  const data = useContext(AppContext)
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

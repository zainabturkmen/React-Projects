import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {

  return(
    <main>
      <section className="container">
        <h3>0 birthday today</h3>
        <List />
        <button onClick={()=> console.log("click me")}></button>
      </section>
    </main>
  )

}

export default App;

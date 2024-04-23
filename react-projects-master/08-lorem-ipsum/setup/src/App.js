import React, { useState } from 'react';
import data from './data';


function App() {
  
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  return (
    <section className = "section-center">
      <h3>tired of boring lorem ipsum?</h3>
      {/* <form className="lorem-form" on></form> */}
    </section>
    );
}

export default App;

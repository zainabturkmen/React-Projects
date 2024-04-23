import React, { useState } from 'react';
import data from './data';


function App() {
  
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log("hello world");
  }

  return (
    <section className = "section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input type="number" name="amount" id="amount" />
      </form>
    </section>
    );
}

export default App;

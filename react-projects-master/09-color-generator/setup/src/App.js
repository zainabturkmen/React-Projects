import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
 const [color, setColor] = useState("")
 const [error, setError] = useState(false)
 const [list, setList] = useState([])

 const handleSubmit = () => {
  
 }
  return <h2>color generator project</h2>

}

export default App

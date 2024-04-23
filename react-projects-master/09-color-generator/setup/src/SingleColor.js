import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",")
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  useEffect(()=> {

  },[alert])
  return (
    <article 
    className={`color ${index > 10 && "color-light"}`} 
    style={{ backgroundColor: `rgb(${bcg})` }}
    onClick= {()=> {
      setAlert(true);
      navigator.clipboard.writeText(hexValue)
    }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </article>
  );
}

export default SingleColor

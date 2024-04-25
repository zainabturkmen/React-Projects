import React, { useEffect } from 'react'

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(()=> {
    const timout = setTimeout(()=> {
      removeAlert()
    }, 3000)
    return ()=>  clearTimeout(timout)
  },[list])
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert

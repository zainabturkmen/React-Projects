import React, { useEffect } from 'react'

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(())
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert

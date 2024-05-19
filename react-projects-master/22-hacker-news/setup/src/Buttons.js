import React from 'react'
import { useGlobalContext } from './context'

const Buttons = ({ isLoading, page, nbPages, handlePage }) => {
  return <div className="btn-container">
    <button disabled={isLoading} onClick={()}></button>
  </div>
};

export default Buttons

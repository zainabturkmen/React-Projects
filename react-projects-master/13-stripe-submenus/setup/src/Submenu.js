import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { isSubmenuOpen, location } = useGlobalContext();
  const continer = useRef(null)
  useEffect(()=> {
    const submenu = continer.current;
    const {center, bottom} = location;
    submenu.style.left = `${}`
  },[location])
  return (
    <aside  className={`${isSubmenuOpen? "submenu show": "submenu"}`} ref={continer}>

    </aside>
  )
}

export default Submenu

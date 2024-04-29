import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { isSubmenuOpen, location, page: {page, links} } = useGlobalContext();
  const continer = useRef(null)
  useEffect(()=> {
    const submenu = continer.current;
    const {center, bottom} = location;
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
  },[location])
  return (
    <aside  className={`${isSubmenuOpen? "submenu show": "submenu"}`} ref={continer}>
       <h4>{page}</h4>
       <div></div>
    </aside>
  )
}

export default Submenu

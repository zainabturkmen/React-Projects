import React from  "react"
import {links, social} from "./data"

const Sidebar = () => {
    return (
      <div className="links-container show-container">
        <ul className="links">
         {links.map((link)=> {
            const {id, url, text} = link
            return (
                <li key={id}>
                    <a></a>
                </li>
            )
         })}
        </ul>
      </div>
    );
}

export default Sidebar;
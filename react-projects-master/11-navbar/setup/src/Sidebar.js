import React from  "react"

const Sidebar = () => {
    return (
      <div className="links-container show-container">
        <ul className="links">
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
          <li>
            <a href="#">products</a>
          </li>
        </ul>
      </div>
    );
}

export default Sidebar;
import React from "react";
import "./SidebarLeft.css"

export const SidebarLeft = () => {
  return (
    <>
      <div className="content">
        <div className="content_left">
          <ul>
           
            <li>
              <a href="#">
              <i className="material-icons">home</i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
              <i className="material-icons">explore</i>
               <span>Explore</span>
              </a>
            </li>
            <li>
              <a href="#">
              <i className="material-icons">bookmarks</i>
                 <span>bookmarks</span>
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
};

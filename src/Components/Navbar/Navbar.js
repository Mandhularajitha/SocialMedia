import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar_left">
          <Link to="/"><img
            className="navbar_logo"
            src="https://cdn2.vectorstock.com/i/1000x1000/75/26/s-logo-and-symbols-template-icons-vector-20617526.jpg"
            alt="logo"
          /></Link>
          <div className="input-icons">
            <i className="fas fa-search icon"></i>
            <input
              className="input-field"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="navbar_right">
          <div className="navbar_right_Profile">
            <img
              src="https://cdn.emojidex.com/emoji/px128/red_hair_lady.png?1537057477"
              alt="Profile"
            />
            <span>NewDay</span>
          </div>
          <div className="navbar_right_links">
            <a href="#">
              <Link to="/login"><i className="fas fa-user-friends"></i></Link>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

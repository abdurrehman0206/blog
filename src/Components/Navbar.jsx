import React, { useState } from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <div className="nav--container center-flexed">
        <h1>BLOGGII</h1>
        <ul className="center-flexed">
          <NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>
            <li>Home</li>
          </NavLink>

          <NavLink
            to="/blogs"
            className={({isActive}) => (isActive ? "active" : "")}
          >
            <li>Blogs</li>
          </NavLink>

          <NavLink
            to="/create"
            className={({isActive}) => (isActive ? "active" : "")}
          >
            <li>Post</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

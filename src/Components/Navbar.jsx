import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <div className="nav--container center-flexed">
        <h1>BLOGGII</h1>
        <ul className="center-flexed">
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/blogs">
            <li>Blogs</li>
          </Link>

          <Link to="/create">
            <li>Post</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark bg-dark"
      style={{ position: "fixed", width: "100%"}}
    >
      <div className="container-fluid">
        <div id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex flex-row">
            <Link to="/home" className="nav-link text-light pr-3">
              Home
            </Link>
            <Link to="/upload" className="nav-link text-light pr-3">
              Upload images
            </Link>
            <Link to="/myimages" className="nav-link text-light pr-3">
              My images
            </Link>
            <Link to="/publicimages" className="nav-link text-light pr-3">
              Public images
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

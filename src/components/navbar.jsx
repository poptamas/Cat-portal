import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark bg-dark"
      style={{ position: "fixed", width: "100%", height:"50px"}}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/home" className="nav-link text-light">
              Home
            </Link>
            <Link to="/upload" className="nav-link text-light">
              Upload images
            </Link>
            <Link to="/myimages" className="nav-link text-light">
              My images
            </Link>
            <Link to="/publicimages" className="nav-link text-light">
              Public images
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

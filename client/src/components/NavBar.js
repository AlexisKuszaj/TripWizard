import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popular from "./Popular";

const NavBar = () => {

  return (
    <div className="NavBar">
      <div className="main-content">
        <div className="side-nav">
          <div className="side-nav-links">
            <ul className="side">
              <li>
                <Link
                  to="/popular"
                  element={<Popular />}
                  className="link"
                >
                  Plan
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/myPlaces" className="link">
                  My Places
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NavBar;

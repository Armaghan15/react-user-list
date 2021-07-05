import React from "react";

// Imports for classes
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.NavbarContainer}>
      <h3 href="home" className="logo">
        UsersList
      </h3>
      <nav>
        <ul>
          <li>
            <a target="_blank" rel="noreferrer" href="https://github.com">
              ViewCode
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://armaghan-hayat.netlify.app"
            >
              MyWebsite
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

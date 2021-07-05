import React from "react";

// Imports for stylesheet classes
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <h4>Made by Armaghan Hayat</h4>
      <h4>
        Follow me
        <a target="_blank" href="https://www.instagram.com/amarmaghan/">
          {" "}
          @amarmaghan
        </a>
      </h4>
    </footer>
  );
};

export default Footer;

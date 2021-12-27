import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    // <div className="container">
    <div className="files header">
      <h1>File Upload And Download</h1>
      <nav>
        {/* <NavLink activeClassName="links active" to="/" exact={true}>
          Home
        </NavLink> */}
        <NavLink activeClassName="links active" to="/home/downloaded-files">
          Files List
        </NavLink>
      </nav>
    </div>
    // </div>
  );
};

export default Header;

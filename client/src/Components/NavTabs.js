import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <div className="nav nav-tabs">
      <div className="nav-item">
      <span style={style}>Google Books </span>
        <Link
          to="/search"
          className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"} style={linkStyle}
        >
          SEARCH
        </Link> <span> | </span>
        <Link 
          to="/saved"
          className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"} style={linkStyle}
        >
          SAVED
        </Link>
      </div>

      </div>
  );
}
const style = {
    marginLeft: "15px",
    fontSize: "25px",
    marginRight: "15px"
}
const linkStyle = {
    fontSize: "20px",
    textDecoration: "none",
    color: "black",
    
}

export default NavTabs;

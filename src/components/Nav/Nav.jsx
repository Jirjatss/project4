import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import "./Nav.css";
const Nav = () => {
  const context = React.useContext(AppContext);
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {context.lang === "en" ? "Home" : "Beranda"}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" style={{ color: "whitesmoke" }}>
            Menu
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                {context.lang === "en" ? "About" : "Tentang"}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Gallery">
                {context.lang === "en" ? "Gallery" : "Galeri"}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                {context.lang === "en" ? "Contact" : "Kontak"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

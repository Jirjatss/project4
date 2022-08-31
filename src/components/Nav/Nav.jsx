import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link } from "react-router-dom";
import { NavContext } from "../../context/NavContext";
import "./Nav.css";
// import TombolGantibahasa from "../TombolGantiBahasa/TombolGantibahasa";

const Nav = () => {
  const context = React.useContext(NavContext);
  return (
    <nav className="navbar navbar-expand-lg">
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
            <li className="nav-item">
              <div style={{ textAlign: "center" }}>
                {/* <button id="btn" onClick={() => context.onchangeBahasa(context.lang === "en" ? "id" : "en")}>
                  Ganti Bahasa
                </button> */}
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() => context.onchangeBahasa(context.lang === "en" ? "id" : "en")} />
                </div>
              </div>
            </li>
            {/* <li className="nav-item">
              <TombolGantibahasa />
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "../sass/style.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <h1 className="header-heading">SIXTEEN_CLOTHING</h1>
          </div>
          <div className="col-xl-6 col-lg-6">
            <nav className="header-nav">
              <ul className="header-nav-ul">
                <Router>
                  <li className="header-nav-ul-li">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="header-nav-ul-li">
                    <Link to="/">Our Product</Link>
                  </li>
                  <li className="header-nav-ul-li">
                    <Link to="/">About Us</Link>
                  </li>
                  <li className="header-nav-ul-li">
                    <Link to="/">Contact Us</Link>
                  </li>
                </Router>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Link } from "react-scroll";
import "../sass/style.scss";
import Home from "./Home";
import Products from "./Products";

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
                <li className="header-nav-ul-li">
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li className="header-nav-ul-li">
                  <NavLink to="/product">Our Product</NavLink>
                </li>
                <li className="header-nav-ul-li">
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li className="header-nav-ul-li">
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const NavProduct = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <nav className="navigation-product">
            <Router>
              <ul className="navigation-product-ul">
                <li className="navigation-product-ul-li">
                  <Link to="">All Product</Link>
                </li>
                <li className="navigation-product-ul-li">
                  <Link to="">Feature</Link>
                </li>
                <li className="navigation-product-ul-li">
                  <Link to="">Flash Detail</Link>
                </li>
                <li className="navigation-product-ul-li">
                  <Link to="">Last Minutes</Link>
                </li>
              </ul>
            </Router>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavProduct;

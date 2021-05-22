import React, { useEffect, useCallbacks } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import BoxItemProduct from "./BoxItemProduct";
import { AiOutlineRight } from "react-icons/ai";
import IntroduceProduct from "./IntroduceProduct";

import { useDispatch, useSelector } from "react-redux";
import typeActions from "../../redux/typeAction";

const ContentHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: typeActions.GET_PRODUCTS_SAGA });
  }, [dispatch]);

  const { data, isLoading } = useSelector((state) => state.reducers);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="wrapper-container">
              <Router>
                <h3 className="title-production-title">Latest Product</h3>
                <Link to="#" className="title-production-link">
                  View All Product <AiOutlineRight />
                </Link>
              </Router>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {isLoading ? (
            <p> loading... </p>
          ) : (
            data.map((item) => {
              return (
                <div key={item._id} className="col-xl-4 col-lg-4">
                  <BoxItemProduct data={item} />
                </div>
              );
            })
          )}
          {}
        </div>
      </div>

      <div className="container">
        <div className="row introduce">
          <IntroduceProduct />
        </div>
      </div>
    </>
  );
};

export default ContentHome;

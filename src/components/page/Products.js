import React from "react";
import BannerProduct from "../content/BannerProduct";
import NavProduct from "../content/NavProduct";
import { useSelector, useDispatch } from "react-redux";
import typeActions from "../../redux/typeAction";
import BoxItemProduct from "../content/BoxItemProduct";
import PaginationProduct from "../content/panigation";
const Products = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({ type: typeActions.GET_PRODUCTS_SAGA });
  }, [dispatch]);
  const data = useSelector((state) => state.reducers.data);
  return (
    <div>
      <BannerProduct />
      <NavProduct />
      <div className="container product-item">
        <div className="row">
          {data.map((item) => {
            return (
              <div key={item._id} className="col-xl-4 col-lg-4">
                <BoxItemProduct data={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="panigation">
              <PaginationProduct />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

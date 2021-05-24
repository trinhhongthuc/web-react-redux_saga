import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { getProductDetail } from "../../api/api";
import { addProductToCart } from "../../redux/actions/actions";
import { AiOutlineClose } from "react-icons/ai";
const ProductDetail = () => {
  const [dataProducts, setDataProducts] = React.useState("");

  const dispatch = useDispatch();
  const id = useParams().id;

  useEffect(() => {
    let data = getProductDetail(id);
    data.then((result) => {
      setDataProducts(result.data);
    });
  }, []);
  const stateCart = useSelector((state) => {
    return state.reducerAddToCart;
  });

  const onClickAddProductToCart = () => {
    dispatch(addProductToCart(dataProducts));
  };

  const CartList = () => {
    return (
      <ul className="product-card-ul">
        {stateCart.dataCart.map((data) => {
          return (
            <li key={data.payload._id} className="product-card-ul-li">
              <div className="product-card-ul-li-img">
                <img src={data.payload.img} alt="" />
              </div>
              <div className="product-card-ul-li-wrapper">
                <h3 className="product-card-ul-li-wrapper-title">
                  {data.payload.title.length > 25
                    ? data.payload.title.slice(0, 25) + "..."
                    : data.payload.title}
                </h3>
                <h5 className="product-card-ul-li-wrapper-price">
                  $ {data.payload.price}
                </h5>
              </div>
              <div className="product-card-ul-li-icon">
                <AiOutlineClose className="product-card-ul-li-icon-close" />
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xl-1 col-lg-1 offset-11">
            <div className="product-card">
              <AiOutlineShoppingCart className="product-card-icon" />

              {stateCart.dataCart.length > 0 && (
                <span className="product-card-number">
                  {stateCart.dataCart.length}
                </span>
              )}

              {stateCart.dataCart.length > 0 && CartList()}
            </div>
          </div>
        </div>
      </div>
      <div className="container product-detail">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="product-detail-img">
              <img src={dataProducts.img} alt="" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="product-detail-wrapper">
              <h2 className="product-detail-wrapper-title">
                {dataProducts.title}
              </h2>
              <div className="product-detail-wrapper-price">
                <span>$12 {dataProducts.price}</span>
              </div>

              <div className="product-detail-wrapper-description">
                <h3 className="product-detail-wrapper-description-heading">
                  description
                </h3>
                <p className="product-detail-wrapper-description-paragraph">
                  {dataProducts.description}
                </p>
              </div>
              <Button
                className="button-buy"
                onClick={() => {
                  onClickAddProductToCart();
                }}
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

const typeActions = {
  // product home page
  GET_PRODUCTS_HOME_SAGA: "GET_PRODUCTS_HOME_SAGA",
  GET_PRODUCTS_HOME_SUCCESS: "GET_PRODUCTS_HOME_SUCCESS",
  GET_PRODUCTS_HOME_FAIL: "GET_PRODUCTS_HOME_FAIL",

  //products that
  GET_PRODUCTS_SAGA: "GET_PRODUCTS_SAGA",
  GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_FAIL: "GET_PRODUCTS_FAIL",

  // create product

  CREATE_PRODUCTS_SAGA: "CREATE_PRODUCTS_SAGA",
  CREATE_PRODUCTS_SUCCESS: "CREATE_PRODUCTS_SUCCESS",
  CREATE_PRODUCTS_FAIL: "CREATE_PRODUCTS_FAIL",
  // remove Selected Product

  REMOVE_SELECTED_PRODUCT: "REMOVE_SELECTED_PRODUCT",

  // get product detail
  GET_PRODUCT_DETAILS: "GET_PRODUCT_DETAILS",

  // add product to cart
  ADD_PRODUCT_TO_CART: "ADD_PRODUCT_TO_CART",
  ADD_PRODUCT_TO_CART_SUCESS: "ADD_PRODUCT_TO_CART_SUCESS",
  ADD_PRODUCT_TO_CART_FAILURE: "ADD_PRODUCT_TO_CART_FAILURE",
};

export default typeActions;

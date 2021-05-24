import typeActions from "../typeAction";

export const getProductsSaga = () => {
  return {
    type: typeActions.GET_PRODUCT_SAGA,
  };
};

export const createProductsSaga = (data) => {
  return {
    type: typeActions.CREATE_PRODUCTS_SAGA,
    data: data,
  };
};

export const createProductsSucess = () => {
  return {
    type: typeActions.CREATE_PRODUCTS_SUCCESS,
  };
};

export const createProductsFail = (data) => {
  return {
    type: typeActions.CREATE_PRODUCTS_FAIL,
    payload: data,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: typeActions.REMOVE_SELECTED_PRODUCT,
  };
};

export const getProductDetail = () => {
  return {
    type: typeActions.GET_PRODUCT_DETAILS,
  };
};

export const addProductToCart = (data) => {
  return {
    type: typeActions.ADD_PRODUCT_TO_CART,
    payload: data,
  };
};

export const addProductToCartSuccess = (data) => {
  return {
    type: typeActions.ADD_PRODUCT_TO_CART_SUCESS,
    payload: data,
  };
};

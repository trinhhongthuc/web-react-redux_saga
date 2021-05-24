import { takeEvery, takeLatest, call, put } from "redux-saga/effects";
import {
  createProductsSucess,
  createProductsFail,
  addProductToCartSuccess,
} from "../actions/actions";
import { createProducts, getProductsHome } from "../../api/api";

import { getProducts } from "../../api/api";
import typeActions from "../typeAction";

// get product
function* watchingGetProductSaga() {
  try {
    const dataProducts = yield call(() => getProducts());
    yield put({
      type: typeActions.GET_PRODUCTS_SUCCESS,
      payload: dataProducts.data,
    });
  } catch (error) {
    yield put({
      type: typeActions.GET_PRODUCTS_FAIL,
      payload: error,
    });
  }
}

// get product  home

function* watchingGetProductSagaHome() {
  try {
    const dataProducts = yield call(() => getProductsHome(3));
    yield put({
      type: typeActions.GET_PRODUCTS_HOME_SUCCESS,
      payload: dataProducts.data,
    });
  } catch (error) {
    yield put({
      type: typeActions.CREATE_PRODUCTS_HOME_FAIL,
      payload: error,
    });
  }
}

// create product

function* watchCreateProduct(data) {
  try {
    const result = yield call(() => {
      createProducts(data.data);
    });
    yield put(createProductsSucess());
  } catch (error) {
    yield put(createProductsFail(error));
  }
}

function* watchAddProductToCart(data) {
  try {
    yield put(addProductToCartSuccess(data));
  } catch (error) {
    // yield put(createProductsFail(error));
    console.log(error);
  }
}

function* getProductsSaga() {
  yield takeLatest(typeActions.GET_PRODUCTS_SAGA, watchingGetProductSaga);
  yield takeLatest(
    typeActions.GET_PRODUCTS_HOME_SAGA,
    watchingGetProductSagaHome
  );
  yield takeLatest(typeActions.CREATE_PRODUCTS_SAGA, watchCreateProduct);
  yield takeLatest(typeActions.ADD_PRODUCT_TO_CART, watchAddProductToCart);
}

export default getProductsSaga;

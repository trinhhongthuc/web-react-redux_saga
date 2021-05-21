import { takeEvery, call, put } from "redux-saga/effects";

import { getProducts } from "../../api/api";
import typeActions from "../typeAction";

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

function* getProductsSaga() {
  yield takeEvery(typeActions.GET_PRODUCTS_SAGA, watchingGetProductSaga);
}

export default getProductsSaga;

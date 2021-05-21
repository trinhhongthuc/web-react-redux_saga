import { all } from "redux-saga/effects";

import getProductsSaga from "./getProductsSaga";

function* rootSaga() {
  yield all([getProductsSaga()]);
}

export default rootSaga;

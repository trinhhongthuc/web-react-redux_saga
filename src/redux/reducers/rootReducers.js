import { combineReducers } from "redux";

import reducers from "./reducers";
import reducerAddToCart from "./reducerAddToCart";

const rootReducers = combineReducers({
  reducers: reducers,
  reducerAddToCart: reducerAddToCart,
});

export default rootReducers;

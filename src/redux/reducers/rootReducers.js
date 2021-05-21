import { combineReducers } from "redux";

import reducers from "./reducers";

const rootReducers = combineReducers({ reducers: reducers });

export default rootReducers;

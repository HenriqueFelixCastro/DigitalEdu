import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import uiReducer from "./uiReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    ui: uiReducer,
  });

export default createRootReducer;

import { combineReducers } from "redux";
import login from "./loginReducer";
import news from "./newsReducer";
import logout from "./logoutReducer";

const rootReducer = combineReducers({
  login,
  logout,
  news,
});

export default rootReducer;

import { combineReducers } from "redux";
import authReducer from "./auth/auth-slice";

export const reducer = combineReducers({
  auth: authReducer,
});

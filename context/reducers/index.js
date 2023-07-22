import { combineReducers } from "redux";
import userAuthReducer from "./userAuthReducer";

const myReducer = combineReducers({
  user: userAuthReducer,
});

export default myReducer;

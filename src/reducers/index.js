import { combineReducers } from "redux";
import products from "./products/products.reducer";

const rootReducer = combineReducers({
  products,
});

export default rootReducer;

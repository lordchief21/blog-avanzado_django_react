import { combineReducers } from "redux";

import blogReducer from "./blog";
import categoryReducer from "./category";

export default combineReducers({
    blogReducer,
    categoryReducer
    
})
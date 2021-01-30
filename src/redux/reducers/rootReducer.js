import { combineReducers } from "redux";
import phonebookReducer from "./phonebookReducer";

const rootReducer = combineReducers({
  contacts: phonebookReducer,
});

export default rootReducer;
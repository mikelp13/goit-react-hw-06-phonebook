import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

// ====== redux toolkit ==============================

const store = configureStore({
  reducer: rootReducer
});

export default store;

// // ===================================================

//  const store = createStore(rootReducer, composeWithDevTools());

//  export default store;

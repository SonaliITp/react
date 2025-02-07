// src/store.js
import { createStore } from "redux";
import rootReducer from './reducers'
import userReducer from "./reducers/UserReducer";

const store = createStore(userReducer);

export default store;

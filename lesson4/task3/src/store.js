import { createStore, combineReducers } from "redux";
import usersReducer from "./users/users.reducer";
import pageReducer from "./page.reducer";

const appReducer = combineReducers({
  users: usersReducer,
  currentPage: pageReducer,
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

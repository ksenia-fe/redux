import { createStore, compose, applyMiddleware } from "redux";
import userReducer from "./users/users.reducer";

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("daispatching", action);
  const result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  userReducer,
  composeEnhancers(applyMiddleware(logger))
);

export default store;

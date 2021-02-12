import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import weatherReducer from "./weather/weather.reducer";

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
  weatherReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;

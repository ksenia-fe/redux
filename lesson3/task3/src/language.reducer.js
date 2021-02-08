import { SET_LANGUAGE } from "./language.actions";

const languageReducer = (state = "", action) => {
  if (action.type === SET_LANGUAGE) {
    return action.payload.lang;
  } else {
    return state;
  }
};

export default languageReducer;

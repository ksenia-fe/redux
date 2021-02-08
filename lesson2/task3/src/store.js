import { createStore } from "redux";

// import usersReducer from "./users.reducer";

const ADD_USER = "ADD_USER";
const REMOVE_USER = "REMOVE_USER";

export const addUser = () => {
  return {
    type: ADD_USER,
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

const initialState = {
  usersList: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: {
          ...state.usersList,
          name: "Jane",
          id: 21,
        },
      };
    case REMOVE_USER:
      return {
        ...state,
        // usersList: state.usersList.filter((user) => user.id !== id),
        usersList: state.usersList,
      };
    default:
      return state;
  }
};

const store = createStore(usersReducer);

export default store;

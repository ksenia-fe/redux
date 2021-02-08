const ADD_USER = "ADD_USER";
const REMOVE_USER = "REMOVE_USER";

export const addUser = (newUser) => {
  return {
    type: ADD_USER,
    payload: newUser,
  };
};

export const removeUser = (id) => {
  return {
    type: REMOVE_USER,
    payload: id,
  };
};

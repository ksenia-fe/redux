const ADD_USER = "ADD_USER";
const DELETE_USER = "REMOVE_USER";

export const addUser = (newUser) => {
  return {
    type: ADD_USER,
    payload: newUser,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};

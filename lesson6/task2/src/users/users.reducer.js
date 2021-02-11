import {} from "./users.actions";

const initialState = {
  users: {
    userData: null,
    isfetching: false,
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;

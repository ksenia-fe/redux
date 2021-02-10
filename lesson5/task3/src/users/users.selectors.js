import React from "react";

export const usersListSelector = (state) => {
  return state.users.usersList.filter((user) =>
    user.name.toLowerCase().includes(state.users.filterText.toLowerCase())
  );
};

export const filterTextSelector = (state) => {
  return state.users.filterText;
};

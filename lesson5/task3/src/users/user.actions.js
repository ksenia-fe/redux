// export const FILTER = "USERS/FILTER";
export const HANDLE_TEXT = "HANDLE_TEXT";

// export const filterUsers = () => {
//   return {
//     type: FILTER,
//   };
// };

export const HandleFilterText = (event) => {
  return {
    type: HANDLE_TEXT,
    payload: {
      event,
    },
  };
};

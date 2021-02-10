export const HANDLE_TEXT = "HANDLE_TEXT";

export const HandleFilterText = (text) => {
  return {
    type: HANDLE_TEXT,
    payload: {
      text,
    },
  };
};

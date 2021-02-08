export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const addProduct = (id, name) => {
  return {
    type: ADD_PRODUCT,
    payload: {
      id,
      name,
    },
  };
};

export const removeProduct = (id) => {
  return {
    type: ADD_PRODUCT,
    payload: {
      id,
    },
  };
};

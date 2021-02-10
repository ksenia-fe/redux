export const TOOGLE_OPTION = "OPTIONS/TOOGLE_OPTION";

export const toggleOption = (optionId) => {
  return {
    type: TOOGLE_OPTION,
    payload: {
      optionId,
    },
  };
};

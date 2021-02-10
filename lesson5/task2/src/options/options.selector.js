import { createSelector } from "reselect";

export const optionsListSelector = (state) => {
  return state.options.optionsList;
};

export const selectedIdsListSelector = (state) => {
  return state.options.selected;
};

// option 1
export const selectedOptionsSelector = createSelector(
  [optionsListSelector, selectedIdsListSelector],
  (allOptions, selectedIds) => {
    return allOptions.filter((option) => selectedIds.includes(option.id));
  }
);

// option 2
// export const selectedOptionsSelector = (state) => {
//   const allOptions = optionsListSelector(state);
//   const selectedIds = selectedIdsListSelector(state);

//   return allOptions.filter((option) => selectedIds.includes(option.id));
// };

export const availableOptionsSelector = createSelector(
  [optionsListSelector, selectedIdsListSelector],
  (allOptions, selectedIds) => {
    return allOptions.filter((option) => !selectedIds.includes(option.id));
  }
);

// export const availableOptionsSelector = (state) => {
//   const allOptions = optionsListSelector(state);
//   const selectedIds = selectedIdsListSelector(state);

//   return allOptions.filter((option) => !selectedIds.includes(option.id));
// };

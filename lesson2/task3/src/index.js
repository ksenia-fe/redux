import store, { addUser, removeUser } from "./store";

store.dispatch(addUser);
store.dispatch(removeUser);

// store.subscribe(() => {
//   console.log(store.getState());
//   return 4;
// });

console.log(store.getState());

import { addUser, removeUser } from "./users.actions";
import store from "./store";

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser({ name: "Tom", id: 34 }));
store.dispatch(removeUser(34));
store.dispatch(addUser({ name: "Jane", id: 21 }));

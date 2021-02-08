import store from "./store";
import { increment, decrement, reset } from "./counter.actions";
import { addUser, deleteUser, updateUser } from "./users.actions";

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());
store.dispatch(increment());

store.dispatch(addUser({ name: "Jane", id: 21 }));
store.dispatch(addUser({ name: "Tomas", id: 3 }));
store.dispatch(deleteUser(21));
store.dispatch(updateUser({ age: 345 }));

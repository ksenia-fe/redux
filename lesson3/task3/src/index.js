import store from "./store";
import { addProduct, removeProduct } from "./cart.actions";
import { setUser, removeUser } from "./user.actions";
import { setLanguage } from "./language.actions";

store.subscribe(() => console.log(store.getState()));

store.dispatch(addProduct({ id: 3, name: "efdsv" }));
store.dispatch(addProduct({ id: 4, name: "OK" }));
store.dispatch(removeProduct(4));

store.dispatch(setUser({ name: "Jane", id: 21 }));
store.dispatch(removeUser());
store.dispatch(setUser({ name: "Tomas", id: 3 }));

store.dispatch(setLanguage("en"));

import React from "react";
import { Provider } from "react-redux";

import UsersList from "./users/UsersList";
import store from "./store";

const App = () => {
  return (
    <ul className="users">
      <Provider store={store}>
        <UsersList />
      </Provider>
    </ul>
  );
};

export default App;

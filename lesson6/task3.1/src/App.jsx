import React from "react";
import { Provider } from "react-redux";

import Weather from "./weather/Weather.jsx";
import store from "./store";

const App = () => {
  return (
    <div className="page">
      <Provider store={store}>
        <Weather />
      </Provider>
    </div>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const basename = process.env.REACT_APP_GH_PAGES_BASE_URL || "";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename={basename}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

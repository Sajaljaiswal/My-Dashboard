import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Auth0Provider
    domain="dev-nbnh537xq2tk62gz.us.auth0.com"
    clientId="n0KFIQ3WtnRUf7eqDmBax5rRBFmMYOSW"
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import storeFile from "./redux/store";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ! 9 2 We have to wrap our root comment with PersistGate. The purpose of this is to
// ! Delay the rendering of the app's UI until your persisted state has been retrieved from storage and saved to redux
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

// ! We have to wrap the BrowserRouter component around the App component
// ! What this does is that it will provide the routing functionality
// ! to our entire E-Commerce project
root.render(
  <Provider store={storeFile.store}>
    <BrowserRouter>
      <PersistGate persistor={storeFile.persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// ! 9 2 Redux persist to store the global reducer state object into local storage
// ! session storage only persists on the tab and does not have the storage when u open a new tab.
// ! Copying the link to a new tab doesn't work, only duplicating the tab will link the session storage
import { persistStore } from "redux-persist";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

console.log(process.env.NODE_ENV);

const store = createStore(rootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export default { store, persistor };

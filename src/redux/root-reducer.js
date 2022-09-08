import { combineReducers } from "redux";
import cartReducer from "./cart/cart-reducer";

import userReducer from "./user/user-reducer";

// ! 9 2
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // As the default storage is local storage

// ! 10 1
import directoryReducer from "./directory/directory.reducer";

// ! 10 2
import shopReducer from "./shop/shop.reducer";
/**
 * @type {{key: string, storage: WebStorage, whitelist: string[]}}
 */
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

// ! In our case, we stored only the cart and not user because user is handled by firebase

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);

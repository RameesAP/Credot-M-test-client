// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import userReducer from "./user/userSlice";
// import cartReducer from "./cart/cartSlice";
// import adminReducer from "./admin/adminSlice";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const rootreducer = combineReducers({
//   user: userReducer,
//   cart: cartReducer,
//   admin: adminReducer,
// });

// const persistConfig = {
//   key: "root",
//   storage,
//   version: 1,
// };

// const persistedReducer = persistReducer(persistConfig, rootreducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// export const persistor = persistStore(store);

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import cartReducer from "./cart/cartSlice";
import adminReducer from "./admin/adminSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const userPersistConfig = {
  key: "user",
  storage,
  version: 1,
};

const adminPersistConfig = {
  key: "admin",
  storage,
  version: 1,
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  cart: cartReducer,
  admin: persistReducer(adminPersistConfig, adminReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

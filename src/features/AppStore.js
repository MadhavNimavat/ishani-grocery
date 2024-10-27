import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { AuthReducer } from "./AuthSlice";

const reducers = combineReducers({
  auth: AuthReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
  timeout: 0,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistedStore = persistStore(store);

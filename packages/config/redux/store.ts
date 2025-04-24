import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import type { Reducer, ReducersMapObject } from "redux";

// Generic version that accepts a reducer map (what you're trying to use)
export function createStore<S = any>(
  reducerMap: ReducersMapObject<S>,
  options: Partial<ConfigureStoreOptions> = {}
) {
  return configureStore({
    reducer: reducerMap,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    devTools: process.env.NODE_ENV !== "production",
    ...options,
  });
}

export { configureStore };

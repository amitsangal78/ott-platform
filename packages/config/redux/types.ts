import { configureStore } from "@reduxjs/toolkit";
import type { Action, ThunkAction } from "@reduxjs/toolkit";

// These types can be imported in your app and used with the exported hooks
export type RootState = ReturnType<typeof configureStore>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;

// This is just a placeholder for TypeScript to work with the types
// In actual usage, your app will define the real store
const store = configureStore({
  reducer: {},
});

import { createStore } from "@repo/redux-config";
import counterReducer from "./slices/counterSlice";

// // Define the state shape explicitly
// interface PreloadedState {
//   counter: ReturnType<typeof counterReducer>;
// }

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
//   // preloadedState: {
//   //   counter: counterReducer(undefined, { type: "counter/initialState" }),
//   // },
// }) as any;
export const store: ReturnType<typeof createStore> = createStore({
  counter: counterReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

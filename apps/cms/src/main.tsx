import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@repo/redux-config";
import { store } from "./store";

import App from "./App";
import "./styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

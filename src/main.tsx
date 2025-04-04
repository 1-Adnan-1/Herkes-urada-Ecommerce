import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import store from "./redux/store.ts";
import { Provider } from "react-redux";

import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
    <Toaster position="top-right" />
  </Provider>
);

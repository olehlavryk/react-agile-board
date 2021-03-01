import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import RootStore from "src/store";
import CssBaseline from "@material-ui/core/CssBaseline";
const store = RootStore.create({});
export const StoreContext = createContext(store);

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <CssBaseline />
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

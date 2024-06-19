import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ListItemContextProvider } from "./context/listItemContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ListItemContextProvider>
      <App />
    </ListItemContextProvider>
  </React.StrictMode>
);

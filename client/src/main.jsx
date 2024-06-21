import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ListItemContextProvider } from "./context/ListItemContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { ViewItemContextProvider } from "./context/ViewItemContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ListItemContextProvider>
        <ViewItemContextProvider>
          <App />
        </ViewItemContextProvider>
      </ListItemContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

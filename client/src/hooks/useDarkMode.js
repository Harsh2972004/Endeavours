import { DarkModeContext } from "../context/DarkModeContext";
import { useContext } from "react";

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw Error("useDarkMode must be used inside the DarkModeContextProvider");
  }

  return context;
};

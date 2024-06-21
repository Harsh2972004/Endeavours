import { useContext } from "react";
import { ViewItemContext } from "../context/ViewItemContext";

export const useViewContext = () => {
  const context = useContext(ViewItemContext);

  if (!context) {
    throw Error("View Context must be used inside viewItemContext");
  }

  return context;
};

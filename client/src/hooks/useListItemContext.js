import { ListItemContext } from "../context/listItemContext";
import { useContext } from "react";

export const useListItemContext = () => {
  const context = useContext(ListItemContext);

  if (!context) {
    throw Error(
      "useListItemContext must be used inside the ListItemContextProvider"
    );
  }

  return context;
};

import { act, createContext, useReducer } from "react";

export const ViewItemContext = createContext();

export const viewItemReducer = (state, action) => {
  switch (action.type) {
    case "SET_OPEN_EDIT":
      return {
        openEdit: action.payload,
      };
  }
};

export const ViewItemContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(viewItemReducer, {
    openEdit: { open: false, changed: false },
  });

  console.log("viewContext", state.openEdit);

  return (
    <ViewItemContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ViewItemContext.Provider>
  );
};

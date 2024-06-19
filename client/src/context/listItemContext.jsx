import { createContext, useReducer } from "react";

export const ListItemContext = createContext();

export const listItemReducer = (state, action) => {
  switch (action.type) {
    case "SET_LIST":
      return {
        list: action.payload,
      };
    case "CREATE_LIST_ITEM":
      return {
        list: [action.payload, ...state.list],
      };
    case "DELETE_LIST_ITEM":
      return {
        list: state.list.filter((l) => l._id !== action.payload._id),
      };
    case "UPDATE_LIST_ITEM":
      return {
        // updatedList:
        //   state.list &&
        //   state.list.map((l) =>
        //     l._id === action.payload._id ? action.payload : l
        //   ),
        list: state.list.map((l) =>
          l._id === action.payload._id ? action.payload : l
        ),
      };
    default:
      return state;
  }
};

export const ListItemContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(listItemReducer, {
    list: [],
  });
  return (
    <ListItemContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ListItemContext.Provider>
  );
};

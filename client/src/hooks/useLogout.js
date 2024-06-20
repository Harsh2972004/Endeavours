import { useAuthContext } from "./useAuthContext";
import { useListItemContext } from "./useListItemContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: listDispatch } = useListItemContext();

  const logout = () => {
    // remove from localStorage
    localStorage.removeItem("user");

    //dispatch logout action
    dispatch({ type: "LOGOUT" });
    listDispatch({ type: "SET_LIST", payload: null });
  };

  return { logout };
};

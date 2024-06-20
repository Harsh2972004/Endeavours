import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const uselogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = (userInfo) => {
    setIsLoading(true);
    setError(null);

    axios
      .post("http://localhost:3000/api/user/login", userInfo)
      .then((res) => {
        //saving items to local storage
        localStorage.setItem("user", JSON.stringify(res.data));

        //update auth context
        dispatch({ type: "LOGIN", payload: res.data });

        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.response.data);
      });
  };
  return { login, isLoading, error };
};

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signin from "./pages/Signin";

const App = () => {
  const { user } = useAuthContext();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/home" />}
        ></Route>
        <Route
          path="/signin"
          element={!user ? <Signin /> : <Navigate to="/home" />}
        ></Route>
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/login" />}
        ></Route>
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;

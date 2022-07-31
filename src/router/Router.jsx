import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import Navbar from "../components/Navbar";
import Login from "../pages/login/Login";
import Main from "../pages/main/Main";
import MoveDetail from "../pages/movedetail/MoveDetail";
import Register from "../pages/register/Register";
import NotFound from "../pages/notfound/NotFound";
import { useMovieContext } from "../context/AuthContext";

const Router = () => {
  const { currentUser } = useMovieContext();
  function PrivateRouter() {
    return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Private Route */}
        <Route path="/details/:id" element={<PrivateRouter />}>
          <Route path="" element={<MoveDetail />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

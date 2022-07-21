import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Login from "../pages/login/Login";
import Main from "../pages/main/Main";
import MoveDetail from "../pages/movedetail/MoveDetail";
import Register from "../pages/register/Register";
import NotFound from "../pages/notfound/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<MoveDetail />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

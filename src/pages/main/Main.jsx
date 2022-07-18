import React from "react";
import mainStyles from "../main/main.module.scss";
import { useMovieContext } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const { isLogin, setIsLoggin } = useMovieContext();
  if (isLogin) {
    toast.success("Successful Login");
    setTimeout(() => {
      toast.dismiss();
    }, 5000);
    return (
      <main className={mainStyles.main}>
        <form className={mainStyles["form-container"]}>
          <input type="text" className={mainStyles.input} />
          <button className={mainStyles.btn}>Search</button>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </main>
    );
  } else {
    setIsLoggin(false);
    return (
      <div>
        <h1>Hay amk</h1>
      </div>
    );
  }
};

export default Main;

import React from "react";
import loginStyles from "../login/login.module.scss";
import registerImage from "../../assests/register.jpg";
import { useNavigate } from "react-router-dom";
import { useMovieContext } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn, signUpProvider } from "../../auth/firebase";

const Login = () => {
  const navigate = useNavigate();

  // ! get props from context
  const { password, email, checkEmailLength, checkPasswordLength } =
    useMovieContext();

  const googleHandlerProvider = () => {
    signUpProvider(navigate);
  };
  const loginSubmitHandler = (event) => {
    event.preventDefault();

    if (password.length <= 0 || email.length <= 0) {
      toast.warn(
        "Required fields cannot be left blank",
        { toastId: "asdasdasdasd" },
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    } else {
      signIn(email, password, navigate);
    }
  };
  return (
    <div className={loginStyles.container}>
      <section className={loginStyles.left}>
        <img src={registerImage} alt="registerImage" />
      </section>
      <section className={loginStyles.right}>
        <h1>Login</h1>

        <form
          onSubmit={loginSubmitHandler}
          className={loginStyles["form-container"]}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={checkEmailLength}
            // value={email}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={checkPasswordLength}
            // value={password}
          />

          <a href="/register">Forgot Your Password?</a>
          <button className={loginStyles.btn}>Login</button>
          <button onClick={googleHandlerProvider} className={loginStyles.btn}>
            Continie with Google
          </button>
        </form>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Login;

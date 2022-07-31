import React from "react";
import loginStyles from "../login/login.module.scss";
import registerImage from "../../assests/register.jpg";
import { useNavigate } from "react-router-dom";
import { useMovieContext } from "../../context/AuthContext";
import { toastWarnNotify } from "../../helpers/ToastNotify";
import { signIn, signUpProvider, forgotPassword } from "../../auth/firebase";

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
      toastWarnNotify("Required fields cannot be left blank");
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

          <div className="link" onClick={() => forgotPassword(email)}>
            Forgot Your Password?
          </div>
          <button className={loginStyles.btn}>Login</button>
          <button onClick={googleHandlerProvider} className={loginStyles.btn}>
            Continie with Google
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;

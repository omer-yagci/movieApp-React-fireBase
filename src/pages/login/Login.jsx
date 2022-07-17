import React from "react";
import loginStyles from "../login/login.module.scss";
import registerImage from "../../assests/register.jpg";

const Login = () => {
  return (
    <div className={loginStyles.container}>
      <section className={loginStyles.left}>
        <img src={registerImage} alt="registerImage" />
      </section>
      <section className={loginStyles.right}>
        <h1>Login</h1>

        <form className={loginStyles["form-container"]}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />

          <a href="/register">Forgot Your Password?</a>
        </form>
        <button className={loginStyles.btn}>Login</button>
        <button className={loginStyles.btn}>Continie with Google</button>
      </section>
    </div>
  );
};

export default Login;

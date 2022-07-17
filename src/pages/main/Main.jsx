import React from "react";
import mainStyles from "../main/main.module.scss";

const Main = () => {
  return (
    <main className={mainStyles.main}>
      <form className={mainStyles["form-container"]}>
        <input type="text" className={mainStyles.input} />
        <button className={mainStyles.btn}>Search</button>
      </form>
    </main>
  );
};

export default Main;

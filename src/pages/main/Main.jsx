import React from "react";
import mainStyles from "../main/main.module.scss";
import { useMovieContext } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MoveDetail from "../movedetail/MoveDetail";

const Main = () => {
  const { isLogin, setIsLoggin, movieInputHandler, movie, formSubmitHandler } =
    useMovieContext();

  const { results } = movie;

  if (isLogin) {
    // toast.success("Successful Login");
    // setTimeout(() => {
    //   toast.dismiss();
    // }, 2000);
    return (
      <main className={mainStyles.main}>
        <form
          onSubmit={formSubmitHandler}
          className={mainStyles["form-container"]}
        >
          <input
            type="text"
            className={mainStyles.input}
            onChange={movieInputHandler}
            // value={query}
          />
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
        <div className="card-group">
          {results?.map((result, index) => {
            const { id } = result;
            return <MoveDetail key={id} result={result} />;
          })}
        </div>
      </main>
    );
  } else {
    setIsLoggin(false);
    return (
      <div>
        <h1>HATA!</h1>
      </div>
    );
  }
};

export default Main;

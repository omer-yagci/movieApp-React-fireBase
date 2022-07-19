import React from "react";
import mainStyles from "../main/main.module.scss";
import { useMovieContext } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MoveDetail from "../movedetail/MoveDetail";

const Main = () => {
  const {
    isLogin,
    setIsLoggin,
    movieInputHandler,
    movie,
    formSubmitHandler,
    getDataFromMovies,
    query,
  } = useMovieContext();

  const { results } = movie;
  // const { results } = query;

  console.log("this is results", results);
  console.log("this is query", query);

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
        <div>
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

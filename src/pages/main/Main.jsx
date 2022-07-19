import React from "react";
import mainStyles from "../main/main.module.scss";
import { useMovieContext } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MoveDetail from "../movedetail/MoveDetail";

import defaultImg from "../../assests/defaultImage.png";
const baseURL = "https://image.tmdb.org/t/p/w500";

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
      <>
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
        <main className={mainStyles.main}>
          {results?.map((result, index) => {
            console.log(result);

            const { backdrop_path, original_title, overview, title, id } =
              result;
            return (
              <div className={mainStyles["card"]}>
                <div key={id}>
                  <img
                    src={backdrop_path ? baseURL + backdrop_path : defaultImg}
                    alt={title}
                    className={mainStyles["movie-img"]}
                  />
                  <div className={mainStyles["card-body"]}>
                    <h5>{original_title} </h5>
                    <p className="card-text">
                      {overview}
                      <button className={mainStyles["movie-btn"]}>
                        More Info
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </main>
      </>
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

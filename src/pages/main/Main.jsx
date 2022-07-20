import React from "react";
import mainStyles from "../main/main.module.scss";
import { useMovieContext } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MoveDetail from "../movedetail/MoveDetail";
import { useNavigate } from "react-router-dom";

import defaultImg from "../../assests/defaultImage.png";
const baseURL = "https://image.tmdb.org/t/p/w500";

const Main = () => {
  const { isLogin, setIsLoggin, movieInputHandler, movie, formSubmitHandler } =
    useMovieContext();
  const navigate = useNavigate();
  const { results } = movie;

  const moreInfoClickHandler = () => {
    navigate("details", { state: movie });
  };

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
            // console.log(result);

            const { backdrop_path, original_title, overview, title, id } =
              result;
            return (
              <div className={mainStyles.grid} key={id}>
                <div className={mainStyles["grid-item"]}>
                  <div className={mainStyles["card"]}>
                    <img
                      className={mainStyles["card-img"]}
                      src={backdrop_path ? baseURL + backdrop_path : defaultImg}
                      alt={title}
                    />
                    <div className={mainStyles["card-content"]}>
                      <h1 className={mainStyles["card-header"]}>
                        {original_title}
                      </h1>
                      <p className={mainStyles["card-text"]}>{overview}</p>
                      <button
                        onClick={moreInfoClickHandler}
                        className={mainStyles["card-btn"]}
                      >
                        More Detail <span>→</span>
                      </button>
                    </div>
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

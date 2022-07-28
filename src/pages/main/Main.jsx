import React from "react";
import mainStyles from "../main/main.module.scss";
import { useMovieContext } from "../../context/AuthContext";

// import "react-toastify/dist/ReactToastify.css";

import MovieCard from "../../components/MovieCard";
import NotFound from "../notfound/NotFound";

const Main = () => {
  const { isLogin, setIsLoggin, movieInputHandler, movie, formSubmitHandler } =
    useMovieContext();

  const { results } = movie;

  if (isLogin) {
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

        <main className={mainStyles.main}>
          {results.map((result) => (
            <MovieCard key={result.id} {...result} />
          ))}
        </main>
      </>
    );
  } else {
    setIsLoggin(false);
    return (
      <div>
        <NotFound />
      </div>
    );
  }
};

export default Main;

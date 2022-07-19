import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// ? Defining context
export const MovieListContext = createContext();

// ! Consume function (Custom hook)
export const useMovieContext = () => {
  return useContext(MovieListContext);
};

const AuthContext = ({ children }) => {
  const [movie, setMovie] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLoggin] = useState(true);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`;

  const getDataFromAPI = async () => {
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };
  const movieInputHandler = (e) => {
    setMovie(e.target.value);
  };
  const checkEmailLength = (e) => {
    setEmail(e.target.value);
  };
  const checkPasswordLength = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    getDataFromAPI();
  }, [movie]);
  const values = {
    password,
    email,
    movie,
    checkEmailLength,
    checkPasswordLength,
    isLogin,
    setIsLoggin,
    movieInputHandler,
  };
  return (
    <MovieListContext.Provider value={values}>
      {children}
    </MovieListContext.Provider>
  );
};

export default AuthContext;

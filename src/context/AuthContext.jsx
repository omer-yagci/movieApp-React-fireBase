import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// ? Defining context
export const MovieListContext = createContext();

// ! Consume function (Custom hook)
export const useMovieContext = () => {
  return useContext(MovieListContext);
};

const AuthContext = ({ children }) => {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState([]);

  // ! LOGIN PAGE STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLoggin] = useState(true);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const movieSearchAPI = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

  const getDataFromAPI = async () => {
    try {
      const { data } = await axios.get(url);
      console.log(data.results);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataFromMovies = async () => {
    try {
      const { data } = await axios.get(movieSearchAPI);
      // console.log(data.results);
      setQuery(data);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    getDataFromMovies();
  };
  const movieInputHandler = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);

  // ! LOGIN PAGE HANDLER EVENTS
  const checkEmailLength = (e) => {
    setEmail(e.target.value);
  };

  const checkPasswordLength = (e) => {
    setPassword(e.target.value);
  };

  const values = {
    password,
    email,
    movie,
    checkEmailLength,
    checkPasswordLength,
    isLogin,
    setIsLoggin,
    movieInputHandler,
    formSubmitHandler,
    getDataFromMovies,
    query,
  };
  return (
    <MovieListContext.Provider value={values}>
      {children}
    </MovieListContext.Provider>
  );
};

export default AuthContext;

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { userObserver } from "../auth/firebase";
import { toastWarnNotify } from "../helpers/ToastNotify";

// ? Defining context
export const MovieListContext = createContext();

// ! Consume function (Custom hook)
export const useMovieContext = () => {
  return useContext(MovieListContext);
};

const AuthContext = ({ children }) => {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState([]);

  const [currentUser, setCurrentUser] = useState(false);

  // ! LOGIN PAGE STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLoggin] = useState(true);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const movieSearchAPI = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

  useEffect(() => {
    getDataFromAPI();
  }, []);

  const getDataFromAPI = async () => {
    try {
      const { data } = await axios.get(url);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  // ! New Movie Fetch
  const getDataFromMovies = async () => {
    try {
      const { data } = await axios.get(movieSearchAPI);
      setQuery(data);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (query && currentUser) {
      getDataFromMovies();
    } else if (!currentUser) {
      // alert("ananı sikiyim");
      toastWarnNotify("Please log in to search a movie");
    }
  };
  const movieInputHandler = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  // ! LOGIN PAGE HANDLER EVENTS
  const checkEmailLength = (e) => {
    setEmail(e.target.value.trim());
  };

  const checkPasswordLength = (e) => {
    setPassword(e.target.value);
  };

  // ? Context Values

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
    currentUser,
  };
  return (
    <MovieListContext.Provider value={values}>
      {children}
    </MovieListContext.Provider>
  );
};

export default AuthContext;

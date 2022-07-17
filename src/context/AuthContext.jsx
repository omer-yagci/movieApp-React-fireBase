import { createContext, useEffect, useState } from "react";
import axios from "axios";

// ? Defining context
export const MovieListContext = createContext();

const AuthContext = ({ children }) => {
  const [movie, setMovie] = useState("");

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

  useEffect(() => {
    getDataFromAPI();
  }, []);
  return (
    <MovieListContext.Provider value={{ movie }}>
      {children}
    </MovieListContext.Provider>
  );
};

export default AuthContext;

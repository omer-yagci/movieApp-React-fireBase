import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MoveDetail = () => {
  const [movieDetails, setMovieDetails] = useState("thor");
  const { id } = useParams;

  const {
    title,
    poster_path,
    overview,
    release_date,
    vote_average,
    vote_count,
  } = movieDetails;
  console.log(movieDetails);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const baseURL = "https://image.tmdb.org/t/p/w1280";
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

  useEffect(() => {
    axios
      .get(movieDetailBaseUrl)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
  }, [movieDetailBaseUrl]);
  return (
    <div className="container py-5">
      <h1 className="text-center">{title}</h1>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={poster_path ? baseURL + poster_path : defaultImage}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8 d-flex flex-column ">
            <div className="card-body">
              <h5 className="card-title">Overview</h5>
              <p className="card-text">{overview}</p>
            </div>
            <ul className="list-group ">
              <li className="list-group-item">
                {"Release Date : " + release_date}
              </li>
              <li className="list-group-item">{"Rate : " + vote_average}</li>
              <li className="list-group-item">
                {"Total Vote : " + vote_count}
              </li>
              <li className="list-group-item"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoveDetail;

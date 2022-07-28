import defaultImg from "../assests/defaultImage.png";
import { useNavigate } from "react-router-dom";
import mainStyles from "../pages/main/main.module.scss";
import { AiFillStar } from "react-icons/ai";
import { useMovieContext } from "../context/AuthContext";

const baseURL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({
  backdrop_path,
  original_title,
  overview,
  title,
  id,
  vote_average,
}) => {
  const navigate = useNavigate();
  const { currentUser } = useMovieContext();

  return (
    <div className={mainStyles.grid} key={id}>
      <div className={mainStyles["grid-item"]}>
        {currentUser && (
          <div className={mainStyles["vote"]}>
            <AiFillStar />
            {vote_average}
          </div>
        )}
        <div className={mainStyles["card"]}>
          <img
            className={mainStyles["card-img"]}
            src={backdrop_path ? baseURL + backdrop_path : defaultImg}
            alt={title}
          />
          <div className={mainStyles["card-content"]}>
            <h1 className={mainStyles["card-header"]}>{original_title}</h1>
            <p className={mainStyles["card-text"]}>{overview}</p>
            <button
              onClick={() => navigate("/details/" + id)}
              className={mainStyles["card-btn"]}
            >
              More Detail <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

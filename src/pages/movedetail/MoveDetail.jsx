import classes from "../movedetail/moviedetail.module.scss";
import { useMovieContext } from "../../context/AuthContext";

const baseURL = "https://image.tmdb.org/t/p/w500";
const MoveDetail = ({ result }) => {
  // const { query } = useMovieContext();

  const { backdrop_path, original_title, overview, title } = result;
  return (
    <div>
      <div>
        <img src={baseURL + backdrop_path} alt={title} />
        <div>
          <h5>{original_title}</h5>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MoveDetail;

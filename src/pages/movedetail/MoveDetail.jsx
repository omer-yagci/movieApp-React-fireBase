import classes from "../movedetail/moviedetail.module.scss";

import defaultImg from "../../assests/defaultImage.png";

const baseURL = "https://image.tmdb.org/t/p/w500";
const MoveDetail = ({ result }) => {
  const { backdrop_path, original_title, overview, title } = result;
  return (
    <div className="card-group">
      <div className="card">
        <img
          src={backdrop_path ? baseURL + backdrop_path : defaultImg}
          className={classes["card-img-top"]}
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{original_title}</h5>
          <p className="card-text">{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MoveDetail;

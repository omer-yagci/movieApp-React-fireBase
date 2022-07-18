import React from "react";
import notFoundImage from "../../assests/notfound.jpg";
import { useNavigate } from "react-router-dom";

import classes from "../notfound/notfound.module.scss";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <h1>Something went Wrong!</h1>
      <img src={notFoundImage} alt="notFoundImage" />
      <div>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default NotFound;

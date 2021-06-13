import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadDetails } from "../../actions/detailAction";
import "./Row.css";

const Row = ({ name, id, isLargeRow, backdrop_path, poster_path = false }) => {
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetails(id));
  };

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  if (!isLargeRow) {
    return (
      <div className="row">
        <Link to={`/movie/${id}`}>
          <img
            onClick={loadDetailHandler}
            className="row_poster"
            src={`${baseUrl}${backdrop_path}`}
            alt={name}
          />
        </Link>
      </div>
    );
  } else {
    return (
      <div className="row">
        <Link to={`/movie/${id}`}>
          <img
            onClick={loadDetailHandler}
            className="row_posterLarge"
            src={`${baseUrl}${poster_path}`}
            alt={name}
          />
        </Link>
      </div>
    );
  }
};

export default Row;

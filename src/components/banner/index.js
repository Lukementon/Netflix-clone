import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBanner } from "../../actions/movieAction";

import "./Banner.css";

const Banner = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBanner());
  }, [dispatch]);

  // Get that data back
  const { banner } = useSelector(state => state.movie);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${
          banner?.backdrop_path || banner?.poster_path
        }")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {banner?.title || banner?.name || banner?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>

          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_desctiption">
          {truncate(banner?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;

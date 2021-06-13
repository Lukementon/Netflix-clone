import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./details.css";

const GameDetails = () => {
  const history = useHistory();
  const exitDetailHandler = e => {
    const element = e.target;
    if (element.classList.contains("exit")) {
      history.push("/");
    }
  };

  const { details, isLoading } = useSelector(state => state.detail);

  return (
    <>
      {!isLoading && (
        <div className="card_shadow exit" onClick={exitDetailHandler}>
          <div className="movie_details">
            <header
              className="banner"
              style={{
                backgroundSize: "cover",
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${details.poster_path})`,
                backgroundPosition: "center center",
              }}
            >
              <button
                className="banner_button2 exit"
                onClick={exitDetailHandler}
              >
                X
              </button>
              <div className="banner--fadeBottom2"></div>
            </header>

            <div className="info_text">
              <div className="movie_info">
                <h1 className="title">{details.original_title}</h1>

                <h2 className="tagline">"{details.tagline}"</h2>

                <div className="movie_description">
                  <h3>{details.overview}</h3>
                </div>
              </div>

              <div className="production_info">
                <h3 className="details">
                  {" "}
                  <span>Released:</span> {details.release_date}
                </h3>
                <h3>
                  <span>Genre:</span> {details.genres[0].name}
                </h3>
                <h3 className="time">
                  <span>Runtime:</span> {details.runtime} mins
                </h3>
                <h3 className="rating">
                  <span>Rating:</span> {details.vote_average}/10
                </h3>
                <h3>
                  <span>Language:</span> {details.original_language}
                </h3>
              </div>
            </div>
            <img
              className="screenshot"
              src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
              alt=""
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GameDetails;

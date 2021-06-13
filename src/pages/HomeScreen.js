import React, { useEffect } from "react";
import Banner from "../components/banner";
import "./HomeScreen.css";
import Nav from "../components/nav";
import Row from "../components/rows";
import GameDetails from "../components/details";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../actions/movieAction";
import { useHistory, useLocation } from "react-router-dom";

const HomeScreen = () => {
  const history = useHistory();
  const location = useLocation();
  const pathID = location.pathname.split("/")[2];
  useEffect(() => {
    if (history.location.pathname === "/") {
      return (document.body.style.overflow = "auto");
    }
  }, [history.location.pathname]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  const { trending, topRated, action, comedy, horror, romance, documentary } =
    useSelector(state => state.movie);

  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      {pathID && <GameDetails pathID={pathID} />}

      <div className="row">
        <h2>TRENDING</h2>
        <div className="rows">
          {trending.map(movie => (
            <Row
              key={movie.id}
              id={movie.id}
              name={movie.name}
              poster_path={movie.poster_path}
              backdrop_path={movie.backdrop_path}
              isLargeRow
            />
          ))}
        </div>
      </div>
      <div className="row">
        <h2>Top Rated</h2>
        <div className="rows">
          {topRated.map(movie => (
            <Row
              key={movie.id}
              id={movie.id}
              name={movie.name}
              poster_path={movie.poster_path}
              backdrop_path={movie.backdrop_path}
            />
          ))}
        </div>
      </div>
      <div className="row">
        <h2>Action</h2>
        <div className="rows">
          {action.map(movie => (
            <Row
              key={movie.id}
              id={movie.id}
              name={movie.name}
              poster_path={movie.poster_path}
              backdrop_path={movie.backdrop_path}
            />
          ))}
        </div>
      </div>
      <div className="row">
        <h2>Comedy</h2>
        <div className="rows">
          {comedy.map(movie => (
            <Row
              key={movie.id}
              id={movie.id}
              name={movie.name}
              poster_path={movie.poster_path}
              backdrop_path={movie.backdrop_path}
            />
          ))}
        </div>
      </div>
      <div className="row">
        <h2>Horror</h2>
        <div className="rows">
          {horror.map(movie => (
            <Row
              key={movie.id}
              id={movie.id}
              name={movie.name}
              poster_path={movie.poster_path}
              backdrop_path={movie.backdrop_path}
            />
          ))}
        </div>
      </div>
      <div className="row">
        <h2>Romance</h2>
        <div className="rows">
          {romance.map(movie => (
            <Row
              key={movie.id}
              id={movie.id}
              name={movie.name}
              poster_path={movie.poster_path}
              backdrop_path={movie.backdrop_path}
            />
          ))}
        </div>
      </div>
      <div className="row">
        <h2>Documentaries</h2>
        <div className="rows">
          {documentary.map(movie => (
            <Row
              key={movie.id}
              id={movie.id}
              name={movie.name}
              poster_path={movie.poster_path}
              backdrop_path={movie.backdrop_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

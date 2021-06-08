import React from "react";
import Banner from "../components/banner";
import Nav from "../components/nav";
import Row from "../components/rows";
import {
  fetchNetflixOriginals,
  fetchTrending,
  fetchTopRated,
  fetchActionMovies,
  fetchComedyMovies,
  fetchHorrorMovies,
  fetchRomanceMovies,
  fetchDocumentaries,
} from "../api";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={fetchNetflixOriginals()}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={fetchTrending()} />
      <Row title="Top Rated" fetchUrl={fetchTopRated()} />
      <Row title="Action Movies" fetchUrl={fetchActionMovies()} />
      <Row title="Comedy Movies" fetchUrl={fetchComedyMovies()} />
      <Row title="Horror Movies" fetchUrl={fetchHorrorMovies()} />
      <Row title="Romance Movies" fetchUrl={fetchRomanceMovies()} />
      <Row title="Documentaries" fetchUrl={fetchDocumentaries()} />
    </div>
  );
};

export default HomeScreen;

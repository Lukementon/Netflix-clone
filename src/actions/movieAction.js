import axios from "axios";
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

export const loadBanner = () => async dispatch => {
  const bannerData = await axios.get(fetchTrending());

  dispatch({
    type: "FETCH_BANNER",
    payload: {
      banner:
        bannerData.data.results[
          Math.floor(Math.random() * bannerData.data.results.length - 1)
        ],
    },
  });
};

export const loadMovies = () => async dispatch => {
  const netflixOriginalData = await axios.get(fetchNetflixOriginals());
  const trendingData = await axios.get(fetchTrending());
  const topRatedData = await axios.get(fetchTopRated());
  const actionData = await axios.get(fetchActionMovies());
  const comedyData = await axios.get(fetchComedyMovies());
  const horrorData = await axios.get(fetchHorrorMovies());
  const romanceData = await axios.get(fetchRomanceMovies());
  const documentaryData = await axios.get(fetchDocumentaries());

  dispatch({
    type: "FETCH_MOVIES",
    payload: {
      originals: netflixOriginalData.data.results,
      trending: trendingData.data.results,
      topRated: topRatedData.data.results,
      action: actionData.data.results,
      comedy: comedyData.data.results,
      horror: horrorData.data.results,
      romance: romanceData.data.results,
      documentary: documentaryData.data.results,
    },
  });
};

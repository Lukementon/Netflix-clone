import axios from "axios";
import { fetchNetflixOriginals } from "../api";

export const loadBanner = () => async dispatch => {
  const bannerData = await axios.get(fetchNetflixOriginals());

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

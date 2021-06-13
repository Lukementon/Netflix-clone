import axios from "axios";

import { fetchDetails } from "../api";

export const loadDetails = id => async dispatch => {
  try {
    dispatch({
      type: "LOADING_DETAIL",
    });

    const detailData = await axios.get(fetchDetails(id));

    dispatch({
      type: "FETCH_DETAILS",
      payload: {
        details: detailData.data,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

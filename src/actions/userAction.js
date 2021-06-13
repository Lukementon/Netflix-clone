export const login = userAuth => async dispatch => {
  dispatch({
    type: "LOGIN",
    payload: {
      user: {
        uid: userAuth.uid,
        email: userAuth.email,
      },
    },
  });
};

export const logout = () => async dispatch => {
  dispatch({
    type: "LOGOUT",
    payload: {
      user: null,
    },
  });
};

export const getSubscription = role => async dispatch => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  dispatch({
    type: "GET_SUBSCRIPTION",
    payload: {
      subscription: role,
    },
  });
};

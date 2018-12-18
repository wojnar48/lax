import * as Api from '../util/session_api_util';
import * as actionTypes from '../actionTypes';

export const signup = (user) =>
  async (dispatch) => {
    try {
      dispatch(authRequest());
      const { data } = await Api.signup(user);
      dispatch(authSuccess(data));
    }
      // The message we want to display to the user lives in error.response.data
      catch({ response }) {
        dispatch(authFailure(response.data));
      }
};

export const login = (user) =>
  async (dispatch) => {
    try {
      dispatch(authRequest());
      const { data } = await Api.login(user);
      dispatch(authSuccess(data));
    }
      catch ({ response }) {
        dispatch(authFailure(response.data));
      }
};

export const logout = () =>
  async (dispatch) => {
    try {
      dispatch(logoutRequest());
      await Api.logout();
      dispatch(logoutSuccess());
    }
      catch ({ response }) {
        dispatch(logoutFailure(response.data));
      }
};

export const authRequest = () => ({
  type: actionTypes.AUTH_REQUEST,
});

export const authSuccess = (currentUser) => ({
  type: actionTypes.AUTH_SUCCESS,
  currentUser
});

export const authFailure = (errors) => ({
  type: actionTypes.AUTH_FAILURE,
  errors
});

export const clearErrors = () => ({
  type: actionTypes.CLEAR_ERRORS,
});

export const logoutSuccess = () => ({
  type: actionTypes.LOGOUT_SUCCESS
});

export const logoutRequest = () => ({
  type: actionTypes.LOGOUT_REQUEST
});

export const logoutFailure = () => ({
  type: actionTypes.LOGOUT_FAILURE
});

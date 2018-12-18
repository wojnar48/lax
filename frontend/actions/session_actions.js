import * as Api from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT = 'LOGOUT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const signup = (user) =>
  async (dispatch) => {
    try {
      const { data } = await Api.signup(user);
      dispatch(receiveCurrentUser(data));
    }
      // The message we want to display to the user lives in error.response.data
      catch({ response }) {
        dispatch(receiveErrors(response.data));
      }
};

export const login = (user) =>
  async (dispatch) => {
    try {
      const { data } = await Api.login(user);
      dispatch(receiveCurrentUser(data));
    }
      catch ({ response }) {
        dispatch(receiveErrors(response.data));
      }
};

export const logout = () =>
  async (dispatch) => {
    try {
      await Api.logout();
      dispatch(receiveLogout());
    }
      catch ({ response }) {
        dispatch(receiveErrors(response.data));
      }
};

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveLogout = () => ({
  type: LOGOUT
});

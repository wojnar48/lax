import * as Api from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT = 'LOGOUT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const signup = (user) => (dispatch) => {
  return Api.signup(user)
    .then(({ data }) => dispatch(receiveCurrentUser(data)))
    .catch(({ response }) => dispatch(receiveErrors(response)));
};

export const login = (user) => (dispatch) => {
  return Api.login(user)
    .then(({ data }) => dispatch(receiveCurrentUser(data)))
    .catch(({ response }) => dispatch(receiveErrors(response)));
};

export const loginGuest = () => (dispatch) => {
  return Api.loginGuest()
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
    err => dispatch(receiveErrors(err.responseJSON)));
};

export const logout = () => (dispatch) => {
  return Api.logout()
    .then(() => dispatch(receiveLogout()))
    .catch(({ response }) => dispatch(receiveErrors(response)));
};

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const receiveLogout = () => {
  return {
    type: LOGOUT
  };
};

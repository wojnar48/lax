import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT = 'LOGOUT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const signup = (user) => (dispatch) => {
  return SessionApiUtil.signup(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
    err => dispatch(receiveErrors(err.responseJSON)));
};

export const login = (user) => (dispatch) => {
  return SessionApiUtil.login(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
    err => dispatch(receiveErrors(err.responseJSON)));
};

export const loginGuest = () => (dispatch) => {
  return SessionApiUtil.loginGuest()
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
    err => dispatch(receiveErrors(err.responseJSON)));
};

export const logout = () => (dispatch) => {
  return SessionApiUtil.logout()
    .then(() => dispatch(receiveLogout()),
    err => dispatch(receiveErrors(err.responseJSON)));
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

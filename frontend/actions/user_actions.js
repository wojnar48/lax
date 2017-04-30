import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const fetchAllUsers = () => dispatch => {
  return UserApiUtil.fetchAllUsers()
    .then(res => dispatch(receiveUsers(res)));
};

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

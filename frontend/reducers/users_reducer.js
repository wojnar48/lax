import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/user_actions';
import { merge } from 'lodash';

const UsersReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_USER:
      const newState = merge([], state);
      newState.forEach( (user, idx) => {
        if (user.id === action.user.id) {
          newState[idx] = action.user;
        }
      });
      return newState;  
    default:
      return state;
  }
};

export default UsersReducer;

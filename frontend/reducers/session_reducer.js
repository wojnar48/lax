import * as actionTypes from '../actionTypes';

const nullUser = {
  currentUser: null,
  errors: [],
};

const SessionReducer = (state = nullUser, action) => {
  switch (action.type) {
    case actionTypes.RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return Object.assign({}, nullUser, { currentUser });
    case actionTypes.LOGOUT:
      return nullUser;
    case actionTypes.RECEIVE_ERRORS:
      const errors = action.errors;
      return Object.assign({}, nullUser, { errors });
    default:
      return state;
  }
};

export default SessionReducer;

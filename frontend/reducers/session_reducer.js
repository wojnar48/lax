import * as actionTypes from '../actionTypes';

const initialState = {
  currentUser: null,
  isLoading: false,
  errors: [],
};

const SessionReducer = (state = initialState, action) => {
  let errors;

  switch (action.type) {
    case actionTypes.AUTH_REQUEST:
    case actionTypes.LOGOUT_REQUEST:
      return { ...state, isLoading: true };

    case actionTypes.AUTH_SUCCESS:
      const currentUser = action.currentUser;
      return { isLoading: false, currentUser, errors: [] };

    case actionTypes.AUTH_FAILURE:
    case actionTypes.LOGOUT_FAILURE:
      errors = action.errors;
      return { ...initialState, errors };

    case actionTypes.LOGOUT_SUCCESS:
      return { ...initialState };

    case actionTypes.CLEAR_ERRORS:
      return { ...state, errors: [] };

    default:
      return state;
  }
};

export default SessionReducer;

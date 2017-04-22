import { merge } from 'lodash';

const _initialState = {
  isFetching: true
};

const StateReducer = (state = _initialState, action) => {
  switch(action.type) {
    case 'REQUEST_CHANNELS':
      return merge({}, { isFetching: true });
    case 'REQUEST_COMPLETE':
      return merge({}, { isFetching: false });
    default:
      return state;
  }
};

export default StateReducer;

import { merge } from 'lodash';
import { SET_ACTIVE_CHANNEL } from '../actions/active_channel_actions';

const defaultState = {
  id: null,
  name: null,
  description: null,
  private: null,
  users: [],
};

const ActiveChannelReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ACTIVE_CHANNEL:
      return merge({}, action.activeChannel);
    default:
      return state;
  }
};

export default ActiveChannelReducer;

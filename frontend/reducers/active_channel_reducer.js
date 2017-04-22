import { SET_ACTIVE_CHANNEL } from '../actions/active_channel_actions';
import { channelsArr } from './selectors';

const ActiveChannelReducer = (state = {}, action) => {
  switch(action.type) {
    case SET_ACTIVE_CHANNEL:
      return action.channel;
    default:
      return state;
  }
};

export default ActiveChannelReducer;

import { merge } from 'lodash';
import { RECEIVE_CHANNELS, RECEIVE_CHANNEL } from '../actions/channel_actions';

const ChannelReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_CHANNELS:
      newState = {};
      action.channels.forEach((channel) => {
        newState[channel.id] = channel;
      });
      return newState;
    case RECEIVE_CHANNEL:
      newState = merge({}, state);
      newState[action.channel.id] = action.channel;
      return newState;
    default:
      return state;
  }
};

export default ChannelReducer;

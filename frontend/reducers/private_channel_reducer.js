import { RECEIVE_PRIVATE_CHANNELS,
  RECEIVE_PRIVATE_CHANNEL,
  REMOVE_PRIVATE_CHANNEL } from '../actions/direct_message_actions';
import { merge } from 'lodash';

const PrivateChannelReducer = (state = {}, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_PRIVATE_CHANNELS:
      newState = {};
      action.channels.forEach(channel => {
        newState[channel.id] = channel;
      });
      return newState;
    case RECEIVE_PRIVATE_CHANNEL:
      newState = merge({}, state);
      newState[action.channel.id] = action.channel;
      return newState;
    case REMOVE_PRIVATE_CHANNEL:
      newState = merge({}, state);
      delete newState[action.channel.id];
      return newState;
    default:
      return state;
  }
};

export default PrivateChannelReducer;

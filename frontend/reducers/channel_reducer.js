import {
  RECEIVE_CHANNELS,
  RECEIVE_CHANNEL,
  RECEIVE_DELETE_CHANNEL,
  RECEIVE_ERRORS } from '../actions/channel_actions';
import { merge } from 'lodash';

const ChannelReducer = (state = {}, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_CHANNELS:
      newState = {};
      action.channels.forEach(channel => {
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

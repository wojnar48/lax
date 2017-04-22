import {
  RECEIVE_CHANNELS,
  RECEIVE_CHANNEL,
  REQUEST_CHANNELS,
  RECEIVE_DELETE_CHANNEL,
  RECEIVE_ERRORS } from '../actions/channel_actions';
import { merge } from 'lodash';

const _initialState = {
  channels: {},
  isFetching: false
};

const ChannelReducer = (state = _initialState, action) => {
  let newState;
  switch(action.type) {
    case REQUEST_CHANNELS:
      newState = {};
      newState.isFetching = true;
      return newState;
    case RECEIVE_CHANNELS:
      newState = {};
      action.channels.forEach(channel => {
        newState[channel.id] = channel;
      });
      newState.isFetching = false;
      return newState;
    case RECEIVE_CHANNEL:
      newState = state;
      newState[action.channel.id] = action.channel;
      return newState;
    default:
      return state;
  }
};

export default ChannelReducer;

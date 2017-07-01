import { pickBy } from 'lodash';
import {
  RECEIVE_PRIVATE_CHANNELS,
  RECEIVE_PRIVATE_CHANNEL,
  REMOVE_PRIVATE_CHANNEL,
} from '../actions/direct_message_actions';

const PrivateChannelReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRIVATE_CHANNELS:
      return action.channels.reduce((obj, channel) => (
        { ...obj, [channel.id]: channel }), {});
    case RECEIVE_PRIVATE_CHANNEL:
      return { ...state, [action.channel.id]: action.channel };
    case REMOVE_PRIVATE_CHANNEL:
      return pickBy({ ...state }, (value, key) =>
        parseInt(key, 10) !== action.channel.id);
    default:
      return state;
  }
};

export default PrivateChannelReducer;

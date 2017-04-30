import { RECEIVE_PRIVATE_CHANNELS } from '../actions/direct_message_actions';
import { merge } from 'lodash';

const PrivateChannelReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_PRIVATE_CHANNELS:
      return action.channels;
    default:
      return state;
  }
};

export default PrivateChannelReducer;

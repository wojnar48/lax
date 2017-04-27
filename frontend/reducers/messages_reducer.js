import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../actions/message_actions';
import { merge } from 'lodash';

const MessagesReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_MESSAGES:
      return action.messages;
    case RECEIVE_MESSAGE:
      return merge([], state, [action.message]);
    default:
      return state;
  }
};

export default MessagesReducer;

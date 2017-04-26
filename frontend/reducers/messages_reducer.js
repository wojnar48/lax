import { RECEIVE_MESSAGES } from '../actions/message_actions';
import { merge } from 'lodash';

const MessagesReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_MESSAGES:
      return action.messages;
    default:
      return state;
  }
};

export default MessagesReducer;

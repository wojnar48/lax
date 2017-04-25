import { RECEIVE_MESSAGES } from '../actions/message_actions';
import { merge } from 'lodash';

const MessagesReducer = (state = {}, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_MESSAGES:
      newState = {};
      action.messages.forEach(message => {
        newState[message.id] = message;
      });
      return newState;
    default:
      return state;
  }
};

export default MessagesReducer;

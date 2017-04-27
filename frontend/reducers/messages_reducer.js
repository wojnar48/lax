import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../actions/message_actions';
import { merge } from 'lodash';

const MessagesReducer = (state = [], action) => {
  debugger
  switch(action.type) {
    case RECEIVE_MESSAGES:
      return action.messages;
    case RECEIVE_MESSAGE:
      const newState = merge([], state);
      newState.push(action.message);
      return newState;
    default:
      return state;
  }
};

export default MessagesReducer;

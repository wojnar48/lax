import { merge } from 'lodash';
import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../actions/message_actions';

const MessagesReducer = (state = [], action) => {
  let newState;

  switch (action.type) {
    case RECEIVE_MESSAGES:
      return action.messages;
    case RECEIVE_MESSAGE:
      newState = merge([], state);
      newState.push(action.message);
      return newState;
    default:
      return state;
  }
};

export default MessagesReducer;

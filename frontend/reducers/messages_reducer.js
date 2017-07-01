import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../actions/message_actions';

const MessagesReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return action.messages;
    case RECEIVE_MESSAGE:
      return [...state, action.message];
    default:
      return state;
  }
};

export default MessagesReducer;

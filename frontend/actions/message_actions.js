import * as MessageApiUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const fetchMessages = (channel_id) => (dispatch) => {
  return MessageApiUtil.fetchChannelMessages(channel_id)
    .then(res => dispatch(receiveMessages(res)));
};

export const createMessage = (channel_id, message) => (dispatch) => {
  return MessageApiUtil.createMessage(channel_id, message);
};

export const receiveMessages = (messages) => {
  return {
    type: RECEIVE_MESSAGES,
    messages
  };
};

export const receiveMessage = (message) => {
  return {
    type: RECEIVE_MESSAGE,
    message
  };
};

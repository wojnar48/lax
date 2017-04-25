import * as MessageApiUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';

export const fetchMessages = (channel_id) => (dispatch) => {
  return MessageApiUtil.fetchChannelMessages(channel_id)
    .then(res => dispatch(receiveMessages(res)),
    err => console.log(err));
};

export const receiveMessages = (messages) => {
  return {
    type: RECEIVE_MESSAGES,
    messages
  };
};

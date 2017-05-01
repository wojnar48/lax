import * as DmApiUtil from '../util/dm_api_util';

export const RECEIVE_PRIVATE_CHANNELS = 'RECEIVE_PRIVATE_CHANNELS';
export const RECEIVE_PRIVATE_CHANNEL = 'RECEIVE_PRIVATE_CHANNEL';
export const REMOVE_PRIVATE_CHANNEL = 'REMOVE_PRIVATE_CHANNEL';

export const fetchPrivateChannels = () => dispatch => {
  return DmApiUtil.fetchPrivateChannels()
    .then(res => dispatch(receivePrivateChannels(res)));
};

export const createPrivateChannel = (channel) => dispatch => {
  return DmApiUtil.createPrivateChannel(channel)
    .then(res => dispatch(receivePrivateChannel(res)));
};

export const deletePrivateChannel = (privateChannelId) => dispatch => {
  return DmApiUtil.deletePrivateChannel(privateChannelId)
    .then(res => dispatch(removePrivateChannel(res)));
};

export const receivePrivateChannels = (channels) => {
  return {
    type: RECEIVE_PRIVATE_CHANNELS,
    channels
  };
};

export const receivePrivateChannel = (channel) => {
  return {
    type: RECEIVE_PRIVATE_CHANNEL,
    channel
  };
};

export const removePrivateChannel = (channel) => {
  return {
    type: REMOVE_PRIVATE_CHANNEL,
    channel
  };
};

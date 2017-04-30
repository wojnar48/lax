import * as DmApiUtil from '../util/dm_api_util';

export const RECEIVE_PRIVATE_CHANNELS = 'RECEIVE_PRIVATE_CHANNELS';

export const fetchPrivateChannels = () => dispatch => {
  return DmApiUtil.fetchPrivateChannels()
    .then(res => dispatch(receivePrivateChannels));
};

export const receivePrivateChannels = (channels) => {
  return {
    type: RECEIVE_PRIVATE_CHANNELS,
    channels
  };
};

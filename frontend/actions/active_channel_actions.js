export const SET_ACTIVE_CHANNEL = 'SET_ACTIVE_CHANNEL';

export const setActiveChannel = (channel) => {
  return {
    type: SET_ACTIVE_CHANNEL,
    channel
  };
};

export const SET_ACTIVE_CHANNEL = 'SET_ACTIVE_CHANNEL';

export const setActiveChannel = (activeChannel) => {
  return {
    type: SET_ACTIVE_CHANNEL,
    activeChannel
  };
};

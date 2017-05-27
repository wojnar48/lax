export const RECEIVE_NOTIFICATION = 'RECEIVE_NOTIFICATION';

export const receiveNotification = (notification) => {
  return {
    type: RECEIVE_NOTIFICATION,
    notification
  };
};

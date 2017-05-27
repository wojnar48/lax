export const RECEIVE_NOTIFICATION = 'RECEIVE_NOTIFICATION';
export const CLEAR_NOTIFICATIONS = 'CLEAR_NOTIFICATIONS';

export const receiveNotification = (notification) => {
  return {
    type: RECEIVE_NOTIFICATION,
    notification
  };
};

export const clearNotifications = (dmId) => {
  return {
    type: CLEAR_NOTIFICATIONS,
    dmId
  };
};

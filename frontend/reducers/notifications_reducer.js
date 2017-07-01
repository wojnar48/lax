import { RECEIVE_NOTIFICATION, CLEAR_NOTIFICATIONS } from '../actions/notification_actions';

const NotificationsReducer = (state = {}, action) => {
  const newState = { ...state };
  let dmId;

  switch (action.type) {
    case RECEIVE_NOTIFICATION:
      dmId = action.notification.dmId;

      if (newState[dmId] === undefined) {
        newState[dmId] = 1;
      } else {
        newState[dmId] += 1;
      }

      return newState;
    case CLEAR_NOTIFICATIONS:
      newState[action.dmId] = 0;
      return newState;
    default:
      return state;
  }
};

export default NotificationsReducer;

import { RECEIVE_NOTIFICATION, CLEAR_NOTIFICATIONS } from '../actions/notification_actions';
import { merge } from 'lodash';

const NotificationsReducer = (state = {}, action) => {
  let newState;

  switch (action.type) {
    case RECEIVE_NOTIFICATION:
      newState = merge({}, state);
      const dmId = action.notification.dmId;
      if (newState[dmId] === undefined) {
        newState[dmId] = 1;
      } else {
        newState[dmId] += 1;
      }
      return newState;
    case CLEAR_NOTIFICATIONS:
      newState = merge({}, state);
      newState[action.dmId] = 0;
      return newState;
    default:
      return state;
  }
};

export default NotificationsReducer;

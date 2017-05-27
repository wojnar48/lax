import { RECEIVE_NOTIFICATION } from '../actions/notification_actions';
import { merge } from 'lodash';

const NotificationsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_NOTIFICATION:
      const newState = merge({}, state);
      const dmId = action.notification.dmId;
      if (newState[dmId] === undefined) {
        newState[dmId] = 1;
      } else {
        newState[dmId] += 1;
      }
      return newState;
    default:
      return state;
  }
};

export default NotificationsReducer;

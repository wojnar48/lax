import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ChannelReducer from './channel_reducer';
import ActiveChannelReducer from './active_channel_reducer';
import MessagesReducer from './messages_reducer';
import SubscriptionsReducer from './subscriptions_reducer';
import PrivateChannelReducer from './private_channel_reducer';
import UsersReducer from './users_reducer';
import NotificationsReducer from './notifications_reducer';

const appReducer = combineReducers({
  session: SessionReducer,
  channels: ChannelReducer,
  activeChannel: ActiveChannelReducer,
  messages: MessagesReducer,
  subscriptions: SubscriptionsReducer,
  dms: PrivateChannelReducer,
  users: UsersReducer,
  notifications: NotificationsReducer,
});

const RootReducer = (state, action) => {
  const appState = action.type === 'LOGOUT' ? undefined : state;
  return appReducer(appState, action);
};

export default RootReducer;

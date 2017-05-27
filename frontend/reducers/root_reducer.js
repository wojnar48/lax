import SessionReducer from './session_reducer';
import ChannelReducer from './channel_reducer';
import ActiveChannelReducer from './active_channel_reducer';
import MessagesReducer from './messages_reducer';
import SubscriptionsReducer from './subscriptions_reducer';
import PrivateChannelReducer from './private_channel_reducer';
import UsersReducer from './users_reducer';
import NotificationsReducer from './notifications_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  session: SessionReducer,
  channels: ChannelReducer,
  activeChannel: ActiveChannelReducer,
  messages: MessagesReducer,
  subscriptions: SubscriptionsReducer,
  dms: PrivateChannelReducer,
  users: UsersReducer,
  notifications: NotificationsReducer
});

export default RootReducer;

import SessionReducer from './session_reducer';
import ChannelReducer from './channel_reducer';
import ActiveChannelReducer from './active_channel_reducer';
import MessagesReducer from './messages_reducer';
import SubscriptionsReducer from './subscriptions_reducer';
import PrivateChannelReducer from './private_channel_reducer';
import { combineReducers } from 'redux';

// temp removed state reducer
const RootReducer = combineReducers({
  session: SessionReducer,
  channels: ChannelReducer,
  activeChannel: ActiveChannelReducer,
  messages: MessagesReducer,
  subscriptions: SubscriptionsReducer,
  dms: PrivateChannelReducer
});

export default RootReducer;

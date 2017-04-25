import SessionReducer from './session_reducer';
import ChannelReducer from './channel_reducer';
import StateReducer from './state_reducer';
import ActiveChannelReducer from './active_channel_reducer';
import MessagesReducer from './messages_reducer';
import SubscriptionsReducer from './subscriptions_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  session: SessionReducer,
  channels: ChannelReducer,
  state: StateReducer,
  activeChannel: ActiveChannelReducer,
  messages: MessagesReducer,
  subscriptions: SubscriptionsReducer
});

export default RootReducer;

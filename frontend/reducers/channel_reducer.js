import { RECEIVE_CHANNELS, RECEIVE_CHANNEL } from '../actions/channel_actions';

const ChannelReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CHANNELS:
      return action.channels.reduce((obj, channel) => (
        { ...obj, [channel.id]: channel }), {});
    case RECEIVE_CHANNEL:
      return { ...state, [action.channel.id]: action.channel };
    default:
      return state;
  }
};

export default ChannelReducer;

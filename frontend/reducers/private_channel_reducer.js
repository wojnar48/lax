import {
  RECEIVE_PRIVATE_CHANNELS,
  RECEIVE_PRIVATE_CHANNEL,
  REMOVE_PRIVATE_CHANNEL,
} from '../actions/direct_message_actions';

const PrivateChannelReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRIVATE_CHANNELS:
      return action.channels.reduce((obj, channel) => (
        { ...obj, [channel.id]: channel }), {});
    case RECEIVE_PRIVATE_CHANNEL:
      return { ...state, [action.channel.id]: action.channel };
    case REMOVE_PRIVATE_CHANNEL:
      const newState = {};
      // The key will be the id of each subscribed-to private channel
      Object.keys(state).forEach(key => {
        // We add to the new state only those id's that were not removed 
        if (parseInt(key, 10) !== action.channel.id) {
          newState[key] = {...state[key]};
        }
      });

      return newState;
    default:
      return state;
  }
};

export default PrivateChannelReducer;

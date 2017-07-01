import { merge } from 'lodash';
import {
  RECEIVE_SUBSCRIPTIONS,
  RECEIVE_SUBSCRIPTION,
  REMOVE_SUBSCRIPTION,
} from '../actions/subscription_actions';

const SubscriptionsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_SUBSCRIPTIONS:
      newState = {};
      action.subscriptions.forEach((subscription) => {
        newState[subscription.id] = subscription;
      });
      return newState;
    case RECEIVE_SUBSCRIPTION:
      newState = merge({}, state);
      newState[action.subscription.id] = action.subscription;
      return newState;
    case REMOVE_SUBSCRIPTION:
      newState = merge({}, state);
      delete newState[action.subscription.id];
      return newState;
    default:
      return state;
  }
};

export default SubscriptionsReducer;

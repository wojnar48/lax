import * as SubscriptionApiUtil from '../util/subscription_api_util';

export const RECEIVE_SUBSCRIPTIONS = 'RECEIVE_SUBSCRIPTIONS';
export const RECEIVE_SUBSCRIPTION = 'RECEIVE_SUBSCRIPTION';

export const fetchSubscriptions = () => dispatch => {
  return SubscriptionApiUtil.fetchSubscriptions()
    .then(res => dispatch(receiveSubscriptions(res)));
};

export const createSubscription = chatroom_id => dispatch => {
  return SubscriptionApiUtil.createSubscription(chatroom_id)
    .then(res => dispatch(receiveSubscription(res)));
};

export const receiveSubscriptions = (subscriptions) => {
  return {
    type: RECEIVE_SUBSCRIPTIONS,
    subscriptions
  };
};

export const receiveSubscription = (subscription) => {
  return {
    type: RECEIVE_SUBSCRIPTION,
    subscription
  };
};

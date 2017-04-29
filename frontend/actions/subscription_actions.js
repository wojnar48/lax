import * as SubscriptionApiUtil from '../util/subscription_api_util';

export const RECEIVE_SUBSCRIPTIONS = 'RECEIVE_SUBSCRIPTIONS';
export const RECEIVE_SUBSCRIPTION = 'RECEIVE_SUBSCRIPTION';
export const REMOVE_SUBSCRIPTION = 'REMOVE_SUBSCRIPTION';

export const fetchSubscriptions = () => dispatch => {
  return SubscriptionApiUtil.fetchSubscriptions()
    .then(res => dispatch(receiveSubscriptions(res)));
};

export const fetchSubscription = (chatroomId) => dispatch => {
  return SubscriptionApiUtil.fetchSubscription(chatroomId)
    .then(res => dispatch(receiveSubscription(res)));
};

export const createSubscription = chatroomId => dispatch => {
  return SubscriptionApiUtil.createSubscription(chatroomId)
    .then(res => dispatch(receiveSubscription(res)));
};

export const deleteSubscription = (chatroomId) => dispatch => {
  return SubscriptionApiUtil.deleteSubscription(chatroomId)
    .then(res => dispatch(removeSubscription(res)));
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

export const removeSubscription = (subscription) => {
  return {
    type: REMOVE_SUBSCRIPTION,
    subscription
  };
};

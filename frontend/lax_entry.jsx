import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import configureStore from './store/store';
import { fetchChannels } from './actions/channel_actions';
import ActionCable from 'actioncable';
import { deleteSubscription } from './actions/subscription_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.App = {};
  window.App.cable = ActionCable.createConsumer();

  window.store = store;
  window.deleteSubscription = deleteSubscription;

  ReactDOM.render(<Root store={ store } />,
  document.getElementById('root'));
});

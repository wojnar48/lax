import React from 'react';
import { render } from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser },
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  render(
    <Root store={store} />,
    document.getElementById('root'),
  );
});

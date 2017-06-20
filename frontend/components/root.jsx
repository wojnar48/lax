import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import FormContainer from './session/session_form_container';
import Chat from './chat/chat';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/main');
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ FormContainer } />
          <Route path='/login' component={ FormContainer } onEnter={ _redirectIfLoggedIn } />
          <Route path='/signup' component={ FormContainer } onEnter={ _redirectIfLoggedIn } />
        </Route>
        <Route path="/main" component={ Chat } onEnter={ _ensureLoggedIn } />
      </Router>
    </Provider>
  );
};

export default Root;

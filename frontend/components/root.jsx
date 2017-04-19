import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import FormContainer from './session/session_form_container';
import Main from './main';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {

    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/main');
    }
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <Route
            path='/login'
            component={ FormContainer }
            onEnter={ _redirectIfLoggedIn } />

          <Route
            path='/signup'
            component={ FormContainer }
            onEnter={ _redirectIfLoggedIn } />

        </Route>
        <Route path="/main" component={ Main } />
      </Router>
    </Provider>
  );
};

export default Root;

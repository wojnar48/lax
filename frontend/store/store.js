import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from '../reducers/root_reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk)),
  )
);

export default configureStore;

import { createStore, applyMiddleware, compose } from 'redux';
import penderMiddleware from 'redux-pender';
import { composeWithDevTools } from 'remote-redux-devtools';
import rootReducer from './modules';

const middlewares = [penderMiddleware()];

const initialState = {};

const configure = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default configure;

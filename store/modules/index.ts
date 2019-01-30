import { combineReducers } from 'redux';
import ping, { PingState } from './ping';
import todo, { TodoState } from './todo';

export default combineReducers({
  ping,
  todo,
});

export type State = {
  ping: PingState;
  todo: TodoState;
};

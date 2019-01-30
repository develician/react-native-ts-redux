import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { applyPenders } from '../../lib/common';

const PING = 'ping/PING';

export const pingActions = {
  ping: createAction(PING),
};

export type PingState = {
  ping: string;
};
const initialState: PingState = {
  ping: 'ping',
};

const reducer = handleActions(
  {
    [PING]: state => {
      return produce(state, draft => {
        draft.ping = state.ping === 'ping' ? 'pong' : 'ping';
      });
    },
  },
  initialState
);

const penders: any[] = [];

export default (state: PingState, action: any) => {
  return applyPenders(reducer, state, action, penders);
};

import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { applyPenders } from '../../lib/common';
import * as API from '../../lib/api';
import { Todo } from '../../models/todo';

const GET_TODO_BY_ID = 'todo/GET_TODO_BY_ID';
const GET_TODOS = 'todo/GET_TODOS';

export const todoActions = {
  getTodoById: createAction(GET_TODO_BY_ID, API.getTodoById),
  getTodos: createAction(GET_TODOS, API.getTodos),
};

export type TodoState = {
  todos: Todo[];
};
const initialState: TodoState = {
  todos: [],
};

type GetTodoByIdAction = {
  payload: {
    data: Todo;
  };
};

type GetTodosAction = {
  payload: {
    data: Todo[];
  };
};

const reducer = handleActions<TodoState, any>({}, initialState);

const penders = [
  {
    type: GET_TODO_BY_ID,
    onSuccess: (state: TodoState, action: GetTodoByIdAction) => {
      return produce(state, draft => {
        const { data: todo } = action.payload;
        draft.todos.push(todo);
      });
    },
  },
  {
    type: GET_TODOS,
    onSuccess: (state: TodoState, action: GetTodosAction) => {
      return produce(state, draft => {
        const { data: todos } = action.payload;
        draft.todos = todos;
      });
    },
  },
];

export default (state: TodoState, action: any) => {
  return applyPenders(reducer, state, action, penders);
};

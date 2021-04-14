import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';

const todosState = (state: RootState) => state.todos;

export const selectTodos = createSelector(todosState, ({todos}) => todos)
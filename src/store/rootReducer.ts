import { combineReducers } from 'redux';
import todos, { TodosState } from './todo/reducer';

export interface RootState {
  todos: TodosState;
}

export const rootReducer = combineReducers<RootState>({
  todos,
});

export default rootReducer;
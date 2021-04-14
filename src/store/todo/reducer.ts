import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from './models';

export interface TodosState {
  todos: Todo[],
}

const initialState: TodosState = {
  todos: [],
}

const todosSlice = createSlice({
  name:'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      const { id, text } = action.payload;
      const todo = {id, text, completed: false};
      state.todos = [...state.todos, todo];
    },
    toggleTodo(state, action: PayloadAction<string>) {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
})

export const {addTodo, toggleTodo} = todosSlice.actions;

export default todosSlice.reducer;
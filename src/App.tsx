import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from './store/todo';
import { addTodo, toggleTodo } from './store/todo/reducer';

function App() {
  const dispatch = useDispatch();
  const todoList = useSelector(selectTodos);
  const [value, setValue] = useState('');

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  }

  const onSubmitAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim()) {
      setValue('');
      return;
    }
    const id = todoList.length ? Math.max(...todoList.map(todo => parseInt(todo.id, 10))) : 0;
    dispatch(addTodo({id: `${id+1}`, text: value}));
    setValue('');
  }

  const onClickToggleTodo = (id: string) => {
    dispatch(toggleTodo(id))
  }

  return (
    <div>
      <form onSubmit={onSubmitAddTodo}>
        <input type="text" value={value} onChange={onChangeValue} />
        <button type="submit">Add</button>
      </form>
      <br />
      <ul className="todo">
        {todoList.map(({id, text, completed}) => <li key={id} className={`todo--item ${completed ? 'completed' : ''}`} onClick={() => onClickToggleTodo(id)}><span>{text}</span> {completed ? '✅' : '❌'}</li>)}
      </ul>
    </div>
  );
}

export default App;

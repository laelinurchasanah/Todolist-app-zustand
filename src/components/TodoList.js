import React from 'react';
import useStore from '../store/useStore';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useStore((state) => state.todos);

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

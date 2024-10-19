import React from 'react';
import { Link } from 'react-router-dom';
import useStore from '../store/useStore';

const TodoItem = ({ todo }) => {
  const votes = useStore((state) => state.votes);
  const addVote = useStore((state) => state.addVote);

  return (
    <div className="todo-item">
      <Link to={`/detail/${todo.id}`}>
        <p>{todo.text} - {todo.user}</p>
      </Link>
      <div>
        <span className="vote-count">Votes: {votes[todo.id] || 0}</span>
        <button onClick={() => addVote(todo.id)}>Vote</button>
      </div>
    </div>
  );
};

export default TodoItem;

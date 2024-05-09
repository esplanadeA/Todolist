import React from 'react';

export const AddTodoForm = ({ addTodo }) => {
  return (
    <div>
      <button onClick={addTodo}>add new </button>
    </div>
  );
};

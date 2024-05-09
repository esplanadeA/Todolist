import React, { useState } from 'react';

export const AddTodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [todoTime, setToDoTime] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() || !todoTime) return; // Check if todoTime is not empty
    console.log(new Date(todoTime));
    addTodo({ text, time: new Date(todoTime).toISOString() });
    setText('');
    setToDoTime('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add new todo" value={text} onChange={(e) => setText(e.target.value)} />
        <input type="datetime-local" value={todoTime} onChange={(e) => setToDoTime(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

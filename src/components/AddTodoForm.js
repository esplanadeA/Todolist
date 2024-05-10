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
      <h1> add new</h1>
      <form onSubmit={handleSubmit}>
        <label for="newToDos">New todo</label>
        <input
          type="text"
          id="newTodos"
          placeholder="Add new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <h2>Finish before</h2>
        <input type="datetime-local" value={todoTime} onChange={(e) => setToDoTime(e.target.value)} step="1d" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

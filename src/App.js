import './App.css';
import React, { useState } from 'react';
import { ToDoItem } from './components/ToDoItem';
import ToDoList from './components/ToDoList';
import { AddTodoForm } from './components/AddTodoForm';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a Todo App' },
    { id: 3, text: 'Deploy App to Production' },
  ]);

  const deleteTodo = (id) => {
    // Filter out the todo item with the specified ID
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    // Update the state with the new array of todos
    setTodos(updatedTodos);
  };

  const addTodo = ({ text, time }) => {
    const newTodo = {
      id: Math.random().toString(36).substr(2, 9), // Generate unique ID
      text: text,
      time: time,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    console.log(todos);
  };

  const editTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div className="App">
      <AddTodoForm addTodo={addTodo} />
      <ToDoList todos={todos} editTodo={editTodo} onDelete={deleteTodo} />

      <ToDoItem />
    </div>
  );
}

export default App;

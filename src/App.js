import './App.css';
import { ToDoItem } from './components/ToDoItem';
import ToDoList from './components/ToDoList';
import { AddTodoForm } from './components/AddTodoForm';

function App() {
  return (
    <div className="App">
      <ToDoList />
      <ToDoItem />
    </div>
  );
}

export default App;

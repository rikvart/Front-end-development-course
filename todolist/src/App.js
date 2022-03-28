import React, { useState } from 'react';
import Todotable from './Components/TodoTable';



function App() {
  const [todo, setTodo] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([todo, ...todos]);
    setTodo({description: '', date: ''});
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => row !== index));
  }

  return(
    <div>
      
      <input 
        placeholder='description'  
        value={todo.description}
        name="description"
        onChange={inputChanged}
      />
      <input
        placeholder='Date'
        type="date"
        value={todo.date}
        name="date"
        onChange={inputChanged}
      />
      <button onClick={addTodo}>Add</button>

      <Todotable todos={todos} />
      
    </div>
  );
}

export default App;


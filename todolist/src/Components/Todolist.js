import React, { useState } from 'react';

function Todolist() {
  const [todo, setTodo] = useState({description: '', date: '', priority:''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    setTodos([...todos, todo]);
  }

  return (
    <div>
      <input type="text" onChange={inputChanged} placeholder="Description" name="description" value={todo.description}/>
      <input type="text" onChange={inputChanged} placeholder="Date" name="date" value={todo.date}/>
      <input type="text" onChange={inputChanged} placeholder="Priority" name="priority" value={todo.priority}/>
      <button onClick={addTodo}>Add</button>
    
      <table>
        <tbody>
        {
          todos.map((todo, index) => <tr key={index}><td>{todo.description}</td><td>{todo.date}</td><td>{todo.priority}</td></tr>)
        }
        </tbody>
      </table>   
    </div>
  );
};

export default Todolist;
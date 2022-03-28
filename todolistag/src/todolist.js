import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { AutoScrollService } from 'ag-grid-community';


function Todolist() {
  const [todo, setTodo] = useState({description: '', date: '', priority:''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    setTodos([...todos, todo]);
  }

  const columns = [
      { field: "description", sortable: true, filter: true},
      { field: "date", sortable: true, filter: true},
      { field: "priority", sortable: true, filter: true}
  ]

  return (
    <div>
      <input type="text" onChange={inputChanged} placeholder="Description" name="description" value={todo.description}/>
      <input type="date" onChange={inputChanged} placeholder="Date" name="date" value={todo.date}/>
      <input type="text" onChange={inputChanged} placeholder="Priority" name="priority" value={todo.priority}/>
      <button onClick={addTodo}>Add</button>
    <div className="ag-theme-material" style={{width: 1000, height: 400, margin: 'auto'}}>
        <AgGridReact 
            rowData={todos}
            columnDefs={columns}
        />
    </div>
    </div>
  );
};

export default Todolist;
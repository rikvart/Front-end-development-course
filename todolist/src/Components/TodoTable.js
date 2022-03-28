import React from 'react';

function Todotable (props) {
    
    
    
    return (
    
        <div className="Todolist">
            <table>
            <tbody>
                <tr>
                <th>Description</th><th>Date</th>
                </tr>
                {
                    props.todos.map((todo, index) => 
                    
                    <tr key={index}>
                        <td>{todo.description}</td>
                        <td>{todo.date}</td>
                        <td><button id={index} onClick={props.deleteTodo}>Delete</button></td>
                        </tr>)
                }
            </tbody>
            </table>
        </div>
      );
}

export default Todotable;
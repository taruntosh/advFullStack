import './App.css';
import {Component, useEffect, useState } from 'react';
function App() {
  
  const [todos, setTodos] = useState([])

  useEffect(() => {
    let newTodos = [
      {task: 'Buy an iphone', isCompleted: true},
      {task: 'Buy groceries', isCompleted: false},
    ]
    setTodos(newTodos)
  }, [])
  return (
    <div className="App">
      <ul style={{listStyleType: 'none'}}>
        {todos.map(todo => {
          return <li>{todo.task}</li>
        })}
      </ul>
    </div>
  );
}

export default App;

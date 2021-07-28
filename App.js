import React from 'react'
import './App.css';
import Todo from './Todo'
//https://reactjs.org/logo-og.png
function App() {
  return (
    <div className="App">
      <Todo todo_item="Learn reactjs"/>
      <Todo todo_item="make a todo app"/>
      <Todo todo_item="celebrate"/>
    </div>
  );
}

export default App;

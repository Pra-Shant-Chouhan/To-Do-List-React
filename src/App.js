import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo"
import { About } from "./MyComponents/About"
import { Footer } from "./MyComponents/Footer"

import React, { useState, useEffect } from 'react';
// import { TodoItem } from "./MyComponents/TodoItem"

import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    console.log("I am onDeletem of todo", todo)  //delete arrow funtion 
    // Deleting this way in react does not work It's work in Angular & vue.js
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
        return e !== todo;
      })
    );
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am Adding this Todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {

      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);

    console.log(myTodo);
  }


  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {

    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])

  return (
    <>
      <Router>
        <Header title="My To-dosList" searchBar={false} />

        <Switch>
          <Route exact path="/" render={() => {
            return(
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>)
          }}>
            
          </Route>
          <Route exact path="/about">
            <About />
          </Route>

        </Switch>



        {/* <TodoItem/>  */}
        <Footer />

      </Router>
    </>
  );
}

export default App;

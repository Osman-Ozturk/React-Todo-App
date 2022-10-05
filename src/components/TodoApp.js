import React from "react";
import Header from "./Header";
import InputForm from "./InputForm";
import logo from "../logo.svg";
import { useState } from "react";
import TodoList from "./TodoList";

import { useEffect } from "react";
function TodoApp() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const listArr = localStorage.getItem("tasks");
    if (listArr !== null) {
      setTasks(JSON.parse(listArr));
    }
  },[]);

  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const addTodo = (todoObj) => {
    setTasks((prev) => [...prev, todoObj]);
  };
  const toggleDone = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
        <InputForm addTodo={addTodo} tasksLength={tasks.length} />
        <TodoList
          tasks={tasks}
          setTasks={setTasks}
          toggleDone={toggleDone}
          isDone={false}
        />
      </header>
    </div>
  );
}

export default TodoApp;

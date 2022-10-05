import React from 'react'
import TodoItem from "./TodoItem.js";
import "../styles/TodoList.scss";

const TodoList = ({ tasks,setTasks,toggleDone,deleteTodo }) => {
  return (
    <section>
      
      <ul >
        {(tasks).map((task,i) => (
          <TodoItem
            tasks={tasks}
            setTasks={setTasks}
            task={task}
            toggleDone={toggleDone}
            deleteTodo = {deleteTodo}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;


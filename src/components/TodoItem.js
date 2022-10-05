import React from "react";
import "../styles/TodoItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function TodoItem({tasks,setTasks , task, toggleDone }) {
  const deleteHandler =()=>{
    setTasks(tasks.filter(el => el.id !== task.id))
  }
  return (
    <div>
      <li className={`item ${task.done ? "erledigt" : ""}`}>
        <div className="neuesTodo">
          <div className="todo">
            <p className="p">{task.text}</p>
            <div>
              <input
                type="checkbox"
                checked={task.done}
                id={`done${task.id}`}
                onChange={() => toggleDone(task.id)}
              />

              <FontAwesomeIcon
                icon={faTrash}
                style={{ color: "red", marginLeft: "5px" }}
                onClick={deleteHandler}
              />
            </div>
          </div>
          <div className="datum">
            <p>
              Die Aufgabe müssen bis zum{" "}
              {task.datum.split("-").reverse().join(".")} erledigt sein
            </p>
          </div>
        </div>
      </li>
    </div>
  );
}

export default TodoItem;

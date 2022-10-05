import "../styles/InputForm.scss";

import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const InputForm = ({ addTodo, tasksLength }) => {
  const [inputTodo, setInputTodo] = useState("");
  const [datum, setDatum] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (inputTodo) {
      const newTodo = {
        text: inputTodo,
        done: false,
        id: tasksLength,
        datum: datum
      };
      addTodo(newTodo);
      setInputTodo("");
      setDatum("")
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="input-todo">Neues Todo</label>
          <input
            type="text"
            name=""
            id="input-todo"
            onChange={(event) => setInputTodo(event.target.value)}
            value={inputTodo}
            required
          />
          <input
            type="date"
            name=""
            id=""
            onChange={(event) => setDatum(event.target.value)}
            value={datum}
            required
          />
        </div>
        <div className="Add">
          <FontAwesomeIcon icon={faPlus} />
          <button>Add</button> 
        </div>
      </form>
    </div>
  );
};

export default InputForm;

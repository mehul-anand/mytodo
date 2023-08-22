import { useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import { TasksContext } from "..";
export const TaskAdder = () => {
  const { dispatch } = useContext(TasksContext);
  const [userInput, setUserInput] = useState("");
  return (
    <div>
      <label>+</label>
      <input
        onChange={event => setUserInput(event.target.value)}
        placeholder="Enter Task"
      ></input>
      <button
        onClick={() =>
          dispatch({
            type: "addTask",
            payload: { id: uuid(), name: userInput, isChecked: false }
          })
        }
      >
        Add Task
      </button>
    </div>
  );
};

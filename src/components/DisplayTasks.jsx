import { useContext } from "react";
import { TasksContext } from "..";
export const DisplayTasks = ({ taskListToDisp }) => {
  const { dispatch } = useContext(TasksContext);
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {taskListToDisp.map(taskItem => (
          <li key={taskItem.id}>
            <input
              type="checkbox"
              checked={taskItem.isChecked}
              onClick={() =>
                dispatch({ type: "changeCheck", payload: taskItem.id })
              }
            ></input>
            {taskItem.name}
            <button
              onClick={() =>
                dispatch({ type: "deleteTask", payload: taskItem.id })
              }
            >
              Delete Task
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

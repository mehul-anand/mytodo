import { createContext, useReducer } from "react";
import { TaskReducer } from "../reducers/TaskReducer";
export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(TaskReducer, []);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

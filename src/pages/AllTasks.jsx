import React, { useState, useContext, useEffect } from "react";
import { DisplayTasks } from "../components/DisplayTasks";
import { TasksContext } from "..";

export const AllTasks = () => {
  const [loadingState, setLoadingState] = useState(true);
  const { tasks } = useContext(TasksContext);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoadingState(false);
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [tasks]);

  return (
    <div>
      {loadingState && <p>Loading...</p>}
      {!loadingState && <DisplayTasks taskListToDisp={tasks} />}
    </div>
  );
};

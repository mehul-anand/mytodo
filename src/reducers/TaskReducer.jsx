export const TaskReducer = (tasks, action) => {
  console.log(tasks);
  switch (action.type) {
    case "addTask":
      return [...tasks, action.payload];
    case "deleteTask":
      return tasks.filter(tasksItems => tasksItems.id !== action.payload);
    case "changeCheck":
      return tasks.map(taskItems =>
        taskItems.id === action.payload
          ? { ...taskItems, isChecked: !taskItems.isChecked }
          : taskItems
      );
    default:
      return tasks;
  }
};

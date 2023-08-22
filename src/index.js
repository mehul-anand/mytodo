import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TasksContext, TasksProvider } from "./contexts/TasksContext";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { TasksContext };

root.render(
  <StrictMode>
    <Router>
      <TasksProvider>
        <App />
      </TasksProvider>
    </Router>
  </StrictMode>
);

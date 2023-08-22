import "./styles.css";
import { Navbar } from "./components/Navbar";
import { TaskAdder } from "./components/TaskAdder";
import { Routes, Route } from "react-router-dom";
import { OpenTasks } from "./pages/OpenTasks";
import { ClosedTasks } from "./pages/ClosedTasks";
import { AllTasks } from "./pages/AllTasks";

export default function App() {
  const primaryColor = "#846eee";
  return (
    <div className="App">
      <h1 style={{ color: primaryColor }}>(To-do)</h1>
      <Navbar />
      <TaskAdder />
      <h3 style={{ color: primaryColor }}>Tasks</h3>
      <Routes>
        <Route path="/" element={<AllTasks />} />
        <Route path="/open" element={<OpenTasks />} />
        <Route path="/closed" element={<ClosedTasks />} />
      </Routes>
    </div>
  );
}

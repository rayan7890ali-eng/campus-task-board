import { useState, useEffect } from "react";
import TaskCard from "./components/TaskCard";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Submit React Assignment",
      category: "Academic",
    },
    {
      id: 2,
      title: "Attend Campus Club Meeting",
      category: "Campus Activity",
    },
    {
      id: 3,
      title: "Prepare Laboratory Report",
      category: "Laboratory",
    },
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") {
      return;
    }

    const task = {
      id: Date.now(),
      title: newTask,
      category: "General",
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };
  useEffect(() => {
  console.log("Task list updated!");
  console.log("Total number of tasks:", tasks.length);
}, [tasks]);


  return (
    <div className="app">
      <div className="container">
        <div className="header">
  <h1>Campus Task Board</h1>
  <p className="subtitle">Manage your campus tasks easily</p>
</div>


        <div className="add-task">
          <input
            type="text"
            placeholder="Enter a new campus task"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />

          <button onClick={addTask}>Add Task</button>
        </div>

        <div className="task-list">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./newtask.css";
// import Logo from "./Logo";
function Newtask() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setnewTask] = useState("");

  // Add task
  const addTask = () => {
    if (newTask.trim() !== "") {
      const updatedTasks = [...tasks, newTask]; // Create updatedTasks array
      setTasks(updatedTasks); // Update tasks state with new array
      setnewTask(""); // Clear the input field
    }
  };

  // Delete task
  const deleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete); // Remove the task
    setTasks(updatedTasks); // Update the tasks list
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div>
      <div className="input ">
        {/* <Logo title="Todo-List" /> */}
        <input
          type="text"
          value={newTask}
          onChange={(e) => setnewTask(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Enter a Task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="list">
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <div className="task-content">
                <span>{task}</span>
                <button onClick={() => deleteTask(task)}>Delete</button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Newtask;

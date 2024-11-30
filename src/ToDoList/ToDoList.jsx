import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Walk the Dog",
    "clean the Room",
  ]);
  const [newTask, setnewTask] = useState("");

  function handleInputChange(event) {
    setnewTask(event.target.value);
  }

  function AddTask() {
    //if (newTask.trim() !== "") {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setnewTask("");
    //}
  }

  function removeTask(taskId) {
    setTasks(tasks.filter((_, index) => index !== taskId));
  }

  function moveTaskUp(taskId) {
    //check if task already at the top of the list
    if (taskId > 0) {
      //creates a new array
      const updatedTasks = [...tasks];

      //swaps the tasks at the given index with the task before it
      [updatedTasks[taskId], updatedTasks[taskId - 1]] = [
        updatedTasks[taskId - 1],
        updatedTasks[taskId],
      ];

      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(taskId) {
    if (taskId < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[taskId], updatedTasks[taskId + 1]] = [
        updatedTasks[taskId + 1],
        updatedTasks[taskId],
      ];
      setTasks(updatedTasks);
    }
  }
  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button className="add-button" onClick={AddTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button className="remove-button" onClick={() => removeTask(index)}>
              Delete
            </button>
            <button className="moveUp-button" onClick={() => moveTaskUp(index)}>
              ⬆️
            </button>
            <button
              className="moveDown-button"
              onClick={() => moveTaskDown(index)}
            >
              ⬇️
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;

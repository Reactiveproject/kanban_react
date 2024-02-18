import React, { useState } from "react";
import cl from "./Taskblock.module.css";

const Taskblock = ({ blockName, ...props }) => {
  const [taskArray, setTaskArray] = useState([
    { id: 1, status: "Backlog", name: "task one", description: "task one" },
    { id: 2, status: "Ready", name: "task two", description: "task two" },
    {
      id: 3,
      status: "In Progress",
      name: "task three",
      description: "task three",
    },
    {
      id: 4,
      status: "Backlog",
      name: "task four",
      description: "task three",
    },
  ]);

  const [task, setTask] = useState("");

  const addNewTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      status: blockName,
      name: task,
    };
    setTaskArray([...taskArray, newTask]);
    console.log(taskArray);
    setTask("");
  };

  return (
    <div className={cl.taskBlock}>
      <h3>{blockName}</h3>
      <div className={cl.taskItems}>
        {taskArray.map((task) => {
          if (task.status === blockName)
            return (
              <p key={task.id} className={cl.taskItem}>
                {task.name}
              </p>
            );
        })}
        <form>
          <input
            type="text"
            className={cl.taskItem}
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className={cl.addTaskButton} onClick={addNewTask}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Taskblock;

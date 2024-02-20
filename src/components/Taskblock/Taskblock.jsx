import React, { useState } from "react";
import cl from "./Taskblock.module.css";
import MyButton from "../MyButton/MyButton";
import MySelect from "../MySelect/MySelect";

const Taskblock = ({ blockName, taskArray, setTaskArray, ...props }) => {
  const [task, setTask] = useState("");

  const [selectedTask, setSelectedTask] = useState("");

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

  const addExistingTask = (e) => {
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
          {blockName === "Backlog" ? (
            <>
              <input
                type="text"
                className={cl.taskItem}
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <button className={cl.addTaskButton} onClick={addNewTask}>
                Submit
              </button>
            </>
          ) : (
            <>
              <MySelect
                value={selectedTask}
                onChange={(task) => setSelectedTask(task)}
                defaultValue="Choose task"
                dataArray={taskArray}
              />
              <button className={cl.addTaskButton} onClick={addExistingTask}>
                Submit 2
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Taskblock;

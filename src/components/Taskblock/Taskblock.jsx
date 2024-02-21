import React, { useState } from "react";
import cl from "./Taskblock.module.css";
import MyButton from "../MyButton/MyButton";
import MySelect from "../MySelect/MySelect";
import { bloks } from "../../data";

const Taskblock = ({
  blockName,
  filterdTaskArray,
  taskArray,
  setTaskArray,
}) => {
  const [task, setTask] = useState("");

  const [selectedTask, setSelectedTask] = useState("Choose task");

  const addNewTask = (e, title) => {
    e.preventDefault();
    const newTask = {
      description: task,
      id: Date.now(),
      status: blockName,
      name: task,
    };
    setTaskArray([...taskArray, newTask]);
    console.log(taskArray);
    setTask("");
  };

  const chooseTask = (task) => {
    setSelectedTask(task);
    console.log(task);
  };

  // const addExistingTask = (e, selectedTask) => {
  //   e.preventDefault();
  //   console.log(selectedTask);
  //   setTask("");
  // };

  return (
    <div className={cl.taskBlock}>
      <h3>{blockName}</h3>
      <div className={cl.taskItems}>
        {filterdTaskArray.map((task) => {
          if (task.status === blockName)
            return (
              <p key={task.id} className={cl.taskItem}>
                {task.name}
              </p>
            );
        })}
        <form>
          {blockName === "Backlog" ? (
            <div>
              <input
                type="text"
                className={cl.taskItem}
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <button className={cl.addTaskButton} onClick={addNewTask}>
                Submit
              </button>
            </div>
          ) : (
            <div>
              <MySelect
                value={selectedTask}
                onChange={chooseTask}
                defaultValue="Choose task"
                dataArray={taskArray}
                blockName={blockName}
              />
              <button className={cl.addTaskButton}>Submit 2</button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Taskblock;

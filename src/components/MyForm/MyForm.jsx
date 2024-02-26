import { useState } from "react";
import React from "react";
import MyButton from "../MyButton/MyButton";
import MySelect from "../MySelect/MySelect";
import cl from "./MyForm.module.css";

const MyForm = ({ blockName, taskArray, setTaskArray, showForm }) => {
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
    setTask("");
    showForm();
  };

  const changeTaskStatus = (e) => {
    e.preventDefault();
    const newTasksArray = taskArray.map((task) => {
      if (task.name === selectedTask) return { ...task, status: blockName };
      return task;
    });
    setTaskArray(newTasksArray);
    showForm();
  };

  return (
    <form className={cl.form}>
      {blockName === "Backlog" ? (
        <div>
          <input
            type="text"
            className={cl.taskItem}
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <MyButton onClick={addNewTask} value="Submit" />
        </div>
      ) : (
        <div>
          <MySelect
            value={selectedTask}
            onChange={(task) => setSelectedTask(task)}
            defaultValue="Choose task"
            dataArray={taskArray}
            blockName={blockName}
          />
          <MyButton onClick={changeTaskStatus} value="Submit" />
        </div>
      )}
    </form>
  );
};

export default MyForm;

import { useState } from "react";
import React from "react";
import MyButton from "../MyButton/MyButton";
import MySelect from "../MySelect/MySelect";
import cl from "./MyForm.module.css";

const MyForm = ({ blockName, taskArray, setTaskArray, showForm }) => {
  const [task, setTask] = useState("");
  const [selectedTask, setSelectedTask] = useState("Choose task");

  const addNewTask = (e) => {
    e.preventDefault();
    const newTask = {
      description: "",
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
        <div className={cl.inputBlock}>
          <input
            type="text"
            className={cl.taskItem}
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <MyButton status={!task} onClick={addNewTask} value="Submit" />
        </div>
      ) : (
        <div className={cl.inputBlock}>
          <MySelect
            value={selectedTask}
            onChange={(task) => setSelectedTask(task)}
            defaultValue={""}
            dataArray={taskArray}
            blockName={blockName}
          />
          <MyButton
            status={!selectedTask}
            onClick={changeTaskStatus}
            value="Submit"
          />
        </div>
      )}
    </form>
  );
};

export default MyForm;

import React from "react";
import cl from "./Taskitem.module.css";
import { Link, useParams } from "react-router-dom";

const Taskitem = ({ taskArray }) => {
  const { taskid } = useParams();

  const task = taskArray.find((task) => task.id == taskid);

  console.log(task);

  return (
    <div className={cl.taskItem}>
      <div className={cl.header}>
        <h2>{task.name}</h2>
        <Link to={"/"}>
          <div className={cl.close}></div>
        </Link>
      </div>
      <div className={cl.taskDescription}>
        <p>{task.description}</p>
      </div>
    </div>
  );
};

export default Taskitem;

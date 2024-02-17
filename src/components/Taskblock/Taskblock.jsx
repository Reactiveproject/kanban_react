import React, { useState } from "react";
import cl from "./Taskblock.module.css";

const Taskblock = (props) => {
  const [taskArray, setTaskArray] = useState([
    { id: 1, description: "task one" },
    { id: 2, description: "task two" },
    { id: 3, description: "task three" },
  ]);

  return (
    <div className={cl.taskBlock}>
      <h3>{props.blockName}</h3>
      <div className={cl.taskItems}>
        {taskArray.map((task) => {
          return (
            <p key={task.id} className={cl.taskItem}>
              {task.description}
            </p>
          );
        })}
      </div>
      <button className={cl.addTaskButton}>+Add card</button>
    </div>
  );
};

export default Taskblock;

import React from "react";
import Taskblock from "../Taskblock/Taskblock";
import { bloks } from "../../data";
import cl from "./Taskboard.module.css";

const Taskboard = ({ taskArray, setTaskArray }) => {
  return (
    <div className={cl.taskboard}>
      {bloks.map((type) => {
        const filtredTaskArray = taskArray.filter(
          (task) => task.status === type
        );
        return (
          <Taskblock
            key={type}
            blockName={type}
            filterdTaskArray={filtredTaskArray}
            taskArray={taskArray}
            setTaskArray={setTaskArray}
          />
        );
      })}
    </div>
  );
};

export default Taskboard;

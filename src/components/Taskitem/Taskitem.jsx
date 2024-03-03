import React from "react";
import cl from "./Taskitem.module.css";
import { Link, useParams } from "react-router-dom";
import MyButton from "../UI/MyButton/MyButton";
import MyModal from "../UI/MyModal/MyModal";
import useToggle from "../../Hooks/useToggle";

const Taskitem = ({ taskArray, setTaskArray }) => {
  const { taskid } = useParams();
  const [modal, setModal] = useToggle(false);

  const task = taskArray.find((task) => task.id == taskid);

  const deleteTask = () => {
    setTaskArray(taskArray.filter((item) => item.id !== task.id));
  };

  return (
    <div className={cl.taskItem}>
      <div className={cl.header}>
        <h2>{task.name}</h2>
        <Link to={"/"}>
          <div className={cl.close}></div>
        </Link>
      </div>
      <div className={cl.taskDescription}>{task.description}</div>
      {modal && (
        <MyModal
          id={task.id}
          initalValue={task.description}
          toggleModal={setModal}
          taskArray={taskArray}
          setTaskArray={setTaskArray}
        />
      )}
      <div className={cl.footer}>
        <div className={cl.editButton}>
          <MyButton
            value={task.description ? "Edit description" : "Add description"}
            onClick={setModal}
          />
        </div>
        <Link to={"/"}>
          <MyButton value={"Delete task"} onClick={deleteTask} />
        </Link>
      </div>
    </div>
  );
};

export default Taskitem;

import React, { useState } from "react";
import cl from "./MyModal.module.css";
import MyButton from "../MyButton/MyButton";

export default function MyModal({
  toggleModal,
  initalValue,
  setTaskArray,
  taskArray,
  id,
}) {
  const [desc, setDesc] = useState(initalValue);

  const addDecs = () => {
    setTaskArray(
      taskArray.map((task) => {
        if (task.id === id) return { ...task, description: desc };
        return task;
      })
    );
    toggleModal();
  };

  return (
    <div className={cl.myModal}>
      <div className={cl.content}>
        <textarea
          className={cl.textArea}
          type="text"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        ></textarea>
        <MyButton onClick={addDecs} value={"Submit"} />
      </div>
    </div>
  );
}

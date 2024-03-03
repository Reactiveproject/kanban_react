import React from "react";
import cl from "./MyButton.module.css";

const MyButton = ({ onClick, value }) => {
  return (
    <button onClick={onClick} className={cl.button}>
      {value}
    </button>
  );
};

export default MyButton;

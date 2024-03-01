import React from "react";
import cl from "./MyButton.module.css";

const MyButton = ({ onClick, value, status }) => {
  return (
    <button onClick={onClick} className={cl.submitButton}>
      {value}
    </button>
  );
};

export default MyButton;

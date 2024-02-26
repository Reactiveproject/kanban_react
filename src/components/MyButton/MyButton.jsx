import React from "react";
import cl from "./MyButton.module.css";

const MyButton = ({ onClick, value, status }) => {
  return (
    <button disabled={status} onClick={onClick} className={cl.submitButton}>
      {value}
    </button>
  );
};

export default MyButton;

import React, { Children } from "react";
import cl from "./MyButton.module.css";

const MyButton = ({ onClick, value, ...props }) => {
  return (
    <button className={cl.submitButton} onClick={onClick}>
      {value}
    </button>
  );
};

export default MyButton;

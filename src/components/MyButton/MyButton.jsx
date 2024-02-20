import React, { Children } from "react";
import cl from "./MyButton.module.css";

const MyButton = ({ Children, ...props }) => {
  return <button className={cl.submitButton}>{Children}</button>;
};

export default MyButton;

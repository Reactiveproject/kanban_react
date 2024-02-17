import React from "react";
import cl from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={cl.footer}>
      <div className={cl.tasksModule}>
        <p>Active tasks {props.activeCount}</p>
        <p>Finished tasks {props.finishedCount}</p>
      </div>
      <div className={cl.kanbanAuthInfo}>
        <p>Kanban board by Reactive in 2024</p>
      </div>
    </div>
  );
};

export default Footer;

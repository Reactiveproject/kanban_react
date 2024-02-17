import React from "react";
import cl from "./Header.module.css";

const Header = () => {
  return (
    <div className={cl.header}>
      <p>Awesome Kanban Board</p>
      <div className={cl.loginModule}></div>
    </div>
  );
};

export default Header;

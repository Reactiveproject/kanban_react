import React from "react";
import cl from "./Header.module.css";
import LoginModule from "../LoginModule/LoginModule";

const Header = () => {
  return (
    <div className={cl.header}>
      <p>Awesome Kanban Board</p>
      <LoginModule />
    </div>
  );
};

export default Header;

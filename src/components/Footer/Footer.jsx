import cl from "./Footer.module.css";

const Footer = ({ taskArray }) => {
  console.log(taskArray.length);

  const finishedTasks = taskArray.filter((task) => task.status === "Finished");
  const activeTasks = taskArray.length - finishedTasks.length;

  return (
    <div className={cl.footer}>
      <div className={cl.tasksModule}>
        <p>Active tasks {activeTasks}</p>
        <p>Finished tasks {finishedTasks.length}</p>
      </div>
      <div className={cl.kanbanAuthInfo}>
        <p>Kanban board by Reactive in 2024</p>
      </div>
    </div>
  );
};

export default Footer;

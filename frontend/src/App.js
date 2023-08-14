import Task from "./components/Task";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
import styles from "./App.module.css";
import * as api from "./api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [render, setRender] = useState(0);

  const triggerRender = () => {
    setRender(render + 1);
  };

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await api.getTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, [tasks, render]);

  return (
    <div className={styles.app}>
      <header className={styles.header}>FullStack To-Do Application</header>
      <main className={styles.main}>
        <AddTask triggerRender={triggerRender} />
        <Task tasks={tasks} />
        <button className={styles.btn__delete_all} onClick={api.deleteAllTasks}>
          Delete All
        </button>
      </main>
    </div>
  );
}

export default App;

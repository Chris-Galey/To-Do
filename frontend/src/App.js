import Task from "./components/Task";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
import styles from "./App.module.css";
import * as api from "./api";

function App() {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const tasksFromServer = await api.getTasks();
    setTasks(tasksFromServer);
  };
  getTasks();

  const handleDeleteTask = async (id) => {
    await api.deleteTask(id);
  };
  const handleUpdateTask = async (id, title, desc) => {
    await api.updateTask(id, title, desc);
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>FullStack To-Do Application</header>
      <main className={styles.main}>
        <AddTask />
        {tasks.map((task) => {
          return (
            <Task
              key={task._id}
              tasks={task}
              onDelete={handleDeleteTask}
              onUpdate={handleUpdateTask}
            />
          );
        })}
        <button className={styles.btn__delete_all}>Delete All</button>
      </main>
    </div>
  );
}

export default App;

import Task from "./components/Task";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
import styles from "./App.module.css";
import * as api from "./api";

function App() {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const tasksFromServer = await api.getTasks();
    setTasks(tasksFromServer);
  };

  const handleDeleteTask = async (id) => {
    await api.deleteTask(id);
    getTasks();
  };
  const handleUpdateTask = async (id, description) => {
    await api.updateTask(id, description);
    getTasks();
  };
  const handleDeleteAllTasks = async () => {
    await api.deleteAllTasks();
    getTasks();
  };
  const handleAddTask = async (description) => {
    await api.addTask(description);
    getTasks();
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>FullStack To-Do Application</h1>
      </header>
      <main className={styles.main}>
        <AddTask addTask={handleAddTask} />
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
      </main>
      <div className={styles.footer}>
        <button
          className={styles.btn__delete_all}
          onClick={handleDeleteAllTasks}
        >
          Delete All
        </button>
      </div>
    </div>
  );
}

export default App;

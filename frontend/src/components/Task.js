import * as api from "../api";
import styles from "./Task.module.css";
import { useState } from "react";

export default function Task(props) {
  const [edit, setEdit] = useState(false);
  const handleEdit = async () => {
    setEdit(!edit);
  };

  const tasks = props.tasks;
  const taskList = tasks.map((task) => {
    return (
      <div className={styles.task} key={task._id}>
        <div className={styles.task__title}>
          <h3>{task.title}</h3>
        </div>
        <div className={styles.task__body}>
          <p>{task.description}</p>
        </div>
        <div className={styles.task__footer}>
          <button className={styles.task__button}>{task.status}</button>

          <button
            className={styles.task__button}
            onClick={() => (edit ? false : true)}
          >
            Edit
          </button>
          <button className={styles.task__button} onClick={handleEdit}></button>

          <button
            className={styles.task__button}
            onClick={() => api.deleteTask(task._id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });

  return taskList;
}

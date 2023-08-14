import styles from "./Task.module.css";
import { useState } from "react";

export default function Task({ tasks, onUpdate, onDelete }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState();
  const [edit, setEdit] = useState(false);

  const handleDeleteTask = () => {
    onDelete(tasks._id);
  };
  const handleUpdateTask = () => {
    onUpdate(tasks._id, title, description, status);
    setEdit(false);
  };

  return (
    <div className={styles.task} key={tasks._id}>
      <div className={styles.task__title}>
        {edit ? (
          <input
            type="text"
            id="title"
            className={styles.title__input}
            value={tasks.title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        ) : (
          <h3>{tasks.title}</h3>
        )}
      </div>
      <div className={styles.task__body}>
        {edit ? (
          <input
            type="text"
            id="title"
            className={styles.description__input}
            value={tasks.description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        ) : (
          <p>{tasks.description}</p>
        )}
      </div>
      <div className={styles.task__footer}>
        {edit ? (
          <button className={styles.task__button} onClick={handleUpdateTask}>
            Save
          </button>
        ) : (
          <button className={styles.task__button} onClick={() => setEdit(true)}>
            Edit
          </button>
        )}

        <button className={styles.task__button} onClick={handleDeleteTask}>
          Delete
        </button>
      </div>
    </div>
  );
}

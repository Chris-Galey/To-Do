import styles from "./Task.module.css";
import { useState } from "react";

export default function Task({ tasks, onDelete, onUpdate }) {
  const [edit, setEdit] = useState(false);

  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  console.log(edit, status);

  const handleUpdate = () => {
    onUpdate(tasks._id, description);
    setEdit(!edit);
  };

  return (
    <div className={styles.task} key={tasks._id}>
      {edit ? (
        <div className={styles.task__description}>
          <input
            type="text"
            className={styles.description__input}
            value={tasks.description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      ) : (
        <div className={styles.task__description}>
          <p>{tasks.description}</p>
        </div>
      )}

      <div className={styles.task__footer}>
        <button
          className={styles.task__button}
          onClick={() => setStatus(!status)}
        >
          {status ? "Uncheck" : "Check"}
        </button>

        {edit ? (
          <button className={styles.task__button} onClick={handleUpdate}>
            Save
          </button>
        ) : (
          <button
            className={styles.task__button}
            onClick={() => setEdit(!edit)}
          >
            Edit
          </button>
        )}

        <button
          className={styles.task__button}
          onClick={() => onDelete(tasks._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

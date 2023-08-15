import styles from "./AddTask.module.css";
import { useState } from "react";

export default function AddTask({ addTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(description);

    setDescription("");
  };

  return (
    <div className={styles.addTask}>
      <form className={styles.addTask__form}>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </form>
      <div>
        <button onClick={handleSubmit} className={styles.addTask__button}>
          Add Task
        </button>
      </div>
    </div>
  );
}

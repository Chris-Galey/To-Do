import * as api from "../api";
import styles from "./AddTask.module.css";
import { useState } from "react";

export default function AddTask({ triggerRender }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    api.addTask(title, description);
    setTitle("");
    setDescription("");
    triggerRender();
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className={styles.addTask}>
      <div className={styles.addTask__title}>
        <h3>Add New Task</h3>
      </div>
      <div className={styles.addTask__body}>
        <form className={styles.addTask__form}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
          <button onClick={handleSubmit} className={styles.addTask__button}>
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

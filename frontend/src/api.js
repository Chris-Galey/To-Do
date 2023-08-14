export const getTasks = async () => {
  try {
    const response = await fetch("http://localhost:5000/", {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const addTask = async (title, description) => {
  try {
    await fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteTask = async (id) => {
  try {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateTask = async (id, title, description) => {
  try {
    await fetch(`http://localhost:5000/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, title, description }),
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteAllTasks = async () => {
  try {
    await fetch("http://localhost:5000/", {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

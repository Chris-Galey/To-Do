const express = require("express");

const mongoose = require("mongoose");
const app = express();
const port = 3000;
app.use(express.json());
// DATABASE
const uri =
  "mongodb+srv://galey:<pass>@cluster0.r4zl66m.mongodb.net/?retryWrites=true&w=majority";

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(uri);
  } catch (err) {
    console.log(err);
  }
}

// MODEL
const { Schema } = mongoose;

const TaskSchema = new Schema({
  title: String,
  description: String,
  status: Boolean,
});

const Task = mongoose.model("Task", TaskSchema);

//ROUTES
app
  .route("/")
  .get(async (req, res) => {
    const tasks = await Task.find();
    res.send(tasks);
  })
  .post(async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.send(task);
  })
  .delete(async (req, res) => {
    const task = await Task.deleteMany();
    res.send(task);
  });

app
  .route("/:id")

  .put((req, res) => {
    app.send("Update Task");
  })
  .delete((res, req) => {
    app.send("delete Task");
  });

app.listen(port, () => {
  console.log(`This server is running on port ${port}`);
});

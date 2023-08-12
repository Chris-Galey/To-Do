const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
  title: String,
  description: String,
  status: Boolean,
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = { Task };

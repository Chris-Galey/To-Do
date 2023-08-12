const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const toDoRoutes = require("./routes");
const app = express();
const port = 3001;

//CORS enabled
app.use(cors({ origin: "http://localhost:3002" }));

// DATABASE
const uri =
  "mongodb+srv://galey:whitepine@cluster0.r4zl66m.mongodb.net/?retryWrites=true&w=majority";

async function connectToDatabase() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}
connectToDatabase();

// MIDDLEWARE
app.use(express.json());
app.use("/", toDoRoutes);

// SERVER
app.listen(port, () => {
  console.log(`This server is running on port ${port}`);
});

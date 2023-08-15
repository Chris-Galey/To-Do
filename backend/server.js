const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const toDoRoutes = require("./routes");
const app = express();
const port = 5000;
const db = process.env.DB_PASS;

//CORS enabled
// app.use(cors({ origin: "http://localhost:3000" }));
// app.use(cors());
const corsOptions = {
  origin: "http://localhost:3000", // Replace with your React app's URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsOptions));
app.use(express.json());

// DATABASE
const uri = `mongodb+srv://galey:${db}@cluster0.r4zl66m.mongodb.net/?retryWrites=true&w=majority`;

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
app.use("/", toDoRoutes);

// SERVER
app.listen(port, () => {
  console.log(`This server is running on port ${port}`);
});

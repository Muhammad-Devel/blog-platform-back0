require("dotenv").config({ override: true });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// Import routes
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");

app.get("/", (req, res) => res.send("Hello World!"));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

//connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDBga ulandi");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB: ", err);
  });
// listen to the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

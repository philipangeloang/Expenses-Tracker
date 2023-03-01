require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const trackerRoutes = require("./routes/trackerRoutes");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

// express
const app = express();

// cors
app.use(cors());

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/tracker", trackerRoutes);
app.use("/api/user", userRoutes);

// Connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening at port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

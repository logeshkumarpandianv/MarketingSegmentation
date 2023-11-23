require("dotenv").config();

const express = require("express");
const cors = require("cors");
const createRoutes = require("./routes/createRoutes.js");
const fileUpload = require("express-fileupload");
const path = require("path");
const schedule = require("node-schedule");

const app = express();
app.use(cors());

//connect to db

app.listen(process.env.PORT, () => {
  console.log("connected to db and listening!!!", process.env.PORT);
});

// middleware

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path);
  next();
});
app.use(fileUpload());
app.use(express.static(path.join(__dirname, "uploads")));

// routes
app.use("/api/v1/create", createRoutes);

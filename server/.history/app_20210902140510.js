require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoute = require("./routes/authentication");

// connecting server to database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DATABASE CONNECTED");
  })
  .catch(() => {
    console.log("ERROR CONNECTING TO DATABASE");
  });

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// my custom routes
app.use("/api, authRoute");

// port
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});

module.exports = {
  DATABASE: process.env.DATABASE,
};

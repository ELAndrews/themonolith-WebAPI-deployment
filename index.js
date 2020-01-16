require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helment = require("helmet");

const port =
  process.env.PORT ||
  5000; /* needs to be agreeeable for both my computer, and HEROKU */

const app = express();

app.use(helment());
app.use(cors());
app.use(express.json());

app.get("/api/greeting", (req, res) => {
  res.json(`Hello, ${req.queryname}! How are you?`);
});

app.use((req, res) => {
  res.json(`This API is alive!`);
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

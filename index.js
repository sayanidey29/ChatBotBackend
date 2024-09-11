const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

//CODE

app.get("/", (req, res) => {
  res.send(200, "Hi Sayani");
});

app.post("/getanswer", (req, res) => {
  setTimeout(() => {
    res.send(200, "I am BOT");
  }, 500);
});

app.listen(3030, async () => {
  console.log("Working on http://localhost:3030");
});

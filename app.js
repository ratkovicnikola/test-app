const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send("Error occurred!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

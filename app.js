const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/404", (req, res) => {
  res.send("Error página no encontrada");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

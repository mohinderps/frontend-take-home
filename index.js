const express = require("express");
const app = express();
const testnets = require("./api/testnets");

const port = process.env.PORT || 3001;

app.use(express.json({ extended: false }));

app.use("/api/testnets", testnets);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;

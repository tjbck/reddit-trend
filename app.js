const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const history = require("connect-history-api-fallback");
const moment = require("moment");
const fetch = require('node-fetch');

const app = express();
let server = require("http").createServer(app);

app.use(express.json());
app.use(cors());

// Server Log
app.use((req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    }: ${moment().format()}`
  );
  next();
});

app.get("/predict", function (req, res) {
  let url = req.query.url;
  // Retrieve Reddit Post JSON Data
  fetch(`${url}.json`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Send Data to Prediction Backend
      fetch("http://alexandra.rys.me/api/reddit-trend", {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => {
          res.send({ result });
        })
        .catch((error) => {
          res.send({ error: "Something Went Wrong with Our Prediction Backend :/" });
          console.error(error);
        });
    })
    .catch((error) => {
      res.send({ error: "Only Reddit Post URLs Are Permitted :/" });
      console.error(error);
    });
});

app.use(history());
app.use(express.static(path.join(__dirname, "/front/build")));

let PORT = process.env.PORT || 80;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));

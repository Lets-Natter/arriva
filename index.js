const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:5000/events", event); // Post an event to natter service
  axios.post("http://localhost:5001/events", event); // Post an event to cross-natter service

  res.send({ status: "OK" });
});

app.listen(5005, () => console.log("Listening on 5005"));

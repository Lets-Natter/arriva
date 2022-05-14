const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const event = req.body;

  await axios.post("http://localhost:5000/events", event); // Post an event to natter service
  await axios.post("http://localhost:5001/events", event); // Post an event to cross-natter service
  await axios.post("http://localhost:5002/events", event); // Post an event to query engine service

  res.send({ status: "OK" });
});

app.listen(5005, "127.0.0.1", () => console.log("Listening on 5005"));

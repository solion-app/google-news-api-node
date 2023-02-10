const express = require("express");
const fs = require("fs");
const Axios = require("axios");
let googleNewsAPI = require("google-news-json");

const app = express();

app.get("/", async (req, res) => {
  // Get params from post body
  let topic = req.query.topic;
  let lang = req.query.lang;

  if (!topic) topic = "world";
  if (!lang) lang = "pt-BR";

  let news = await googleNewsAPI.getNews(googleNewsAPI.TOPIC, topic, lang);

  res.send(news);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${process.env.PORT || 3000}`);
});

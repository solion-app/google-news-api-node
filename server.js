const express = require("express");
let googleNewsAPI = require("google-news-json");

const app = express();

app.get("/", async (req, res) => {
  // Get params from post body
  let mode = req.query.mode;
  let topic = req.query.topic;
  let lang = req.query.lang;

  // Set default values
  mode = mode == "topic" ? googleNewsAPI.TOPIC : googleNewsAPI.TOP_NEWS;
  if (!topic) topic = "world";
  if (!lang) lang = "pt-BR";

  // Get news
  let news = await googleNewsAPI.getNews(mode, topic, lang);

  // Send news
  res.send(news);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`App is listening on port ${process.env.PORT || 3000}`);
});

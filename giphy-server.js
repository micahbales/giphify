const express = require('express');
const app = express();
const axios = require('axios');
const serveStatic = require('serve-static');

require('dotenv').config();

/*
  Allow CORS requests from any domain
  This permits our Vue front end to
  query our Express server and receive
  back the data it needs
                                      */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* Serve static assets from dist in production */
app.use(serveStatic(__dirname + "/dist"));

/*
   Query the Giphy API server-side,
   to avoid exposing credentials
   Return results to our Vue front end
                                       */
app.get('/api/v1/giphy', async (req, res) => {
  try {
    let gifs = await axios.get(
      `https://api.giphy.com/v1/gifs/search` +
      `?api_key=${process.env.GIPHY_API_KEY}` +
      `&q=${req.query.search || ''}` +
      `&limit=4` +
      `&rating=pg`)
    .then((res) => { return res.data });

    /* We always want to get back at least 4 gifs for every search
       Check and see if we have at least three gifs; if not, query
       Giphy's trending API and return enough to fill out the results
                                                                      */
    if (gifs.data.length < 4) {
      let moreGifs = await axios.get(
        `https://api.giphy.com/v1/gifs/trending` +
        `?api_key=${process.env.GIPHY_API_KEY}` +
        `&limit=${4 - gifs.data.length}` +
        `&rating=pg` +
        `&offset=${Math.floor(Math.random() * 50) + 1}`)
      .then((res) => { return res.data });

      moreGifs.data.forEach((gif) => { gifs.data.push(gif); });
    }

    res.json(gifs);

  } catch(err) { console.error(err); }
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Express Server Ready to Serve Up Giphy Magic!')
});

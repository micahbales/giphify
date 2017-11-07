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
    const gifs = await axios.get(
      `https://api.giphy.com/v1/gifs/search` +
      `?api_key=${process.env.GIPHY_API_KEY}` +
      `&q=${req.query.search || ''}` +
      `&limit=3` +
      `&rating=pg`)
    .then((res) => { return res.data });

    res.json(gifs);

  } catch(err) { console.error(err); }
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Express Server Ready to Serve Up Giphy Magic!')
});

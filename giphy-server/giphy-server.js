const express = require('express');
const app = express();
const axios = require('axios');

require('dotenv').config();

/*
   Query the Giphy API server-side,
   to avoid exposing credentials
   Return results to our Vue front end
                                       */
app.get('/api/v1/giphy', async (req, res) => {
  try {
    const gifs = await axios.get(
      `http://api.giphy.com/v1/gifs/search` +
      `?api_key=${process.env.GIPHY_API_KEY}` +
      `&q=${req.query.search || ''}` +
      `&limit=3` +
      `&rating=pg`)
    .then((res) => { return res.data });

    res.json(gifs);

  } catch(err) { console.error(err); }
});

app.listen(3000, () => {
  console.log('Express Server Ready to Serve Up Giphy Magic on Port 3000!')
});

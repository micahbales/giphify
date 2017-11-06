const express = require('express');
const app = express();

require('dotenv').config();

app.get('/api/v1/giphy', (req, res) => {
  /* get data from the GIPHY API
     and return it to the Vue app */
  // res.json({});
});

app.listen(3000, () => {
  console.log('Express Server Ready to Serve Up Giphy Magic on Port 3000!')
});

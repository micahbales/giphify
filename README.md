# Giphify

Search for PG-Rated GIFs via the Giphy API.

## Dev Setup

The first step in setting up this app is to get a Giphy API key. The key is
free, and easy to set up. Just visit this site:
https://developers.giphy.com/docs/.

Once you have a key, add it to *.env.sample* and rename the file to *.env*.
This will allow the express server to access data from Giphy.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

//unsplash scraper
const axios = require('axios');
const fs = require('fs');
var https = require('https');
const { auth } = require('../config/unsplash_config.js');

//Node.js Function to save image from External URL.
function saveImageToDisk(url, localPath) {
  var fullUrl = url;
  var file = fs.createWriteStream(localPath);
  var request = https.get(url, function(response) {
  response.pipe(file);
  });
}

const searchAndSaveUnsplash = function ( searchTerm, qty, page, relativePath ) {
  const unsplashURL = `https://api.unsplash.com/search/photos?query=${searchTerm}&page=${page}&per_page=${qty}&client_id=${auth}`

  axios.get(unsplashURL)
  .then(({ data }) => {
    data.results.forEach((result, i) => {
      saveImageToDisk(result.urls.regular, `${relativePath} + ${i}.jpg`)
    })
  })
  .catch(err => console.log(err))
}

searchAndSaveUnsplash('new york', 30, 1, './test')
searchAndSaveUnsplash('new york', 30, 2, './test')
searchAndSaveUnsplash('new york', 30, 3, './test')
searchAndSaveUnsplash('new york', 30, 4, './test')
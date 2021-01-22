/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const showcase = require('./showcase');

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use('/', showcase);

app.listen(port, (err) => {
  if (err) {
    console.log('Error Starting server');
  } else {
    console.log('Server Running on Port: ', port);
  }
});

const express = require('express');
const { ShowCase } = require('../db/index.js');

const showcase = express.Router();

showcase.get('/api/showcase', (req, res) => {
  ShowCase.find().sort({ ratio: 1 })
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.log('Err GET ALL ', err);
      res.status(400).send();
    });
});

showcase.get('/api/showcase/:id', (req, res) => {
  const { id } = req.params;
  ShowCase.findById(id)
    .then((data) => res.status(200).send(data))
    .catch(() => {
      res.status(400).send('Error Getting by Id');
    });
});

showcase.patch('/api/showcase/like/:id', (req, res) => {
  const { id } = req.params;
  const { likedStatus } = req.body;
  if (typeof likedStatus !== 'boolean') {
    res.status(400).send('likedStatus must be a boolean');
    return;
  }
  ShowCase.findByIdAndUpdate(id, { likedStatus },
    { new: true, useFindAndModify: false })
    .then((data) => res.status(200).send(data))
    .catch(() => {
      res.status(400).send('Error Patching liked status');
    });
});

module.exports = showcase;

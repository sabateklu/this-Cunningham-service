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
  console.log(id);
  ShowCase.findById(id)
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.log('Error GETTING by ID', err);
      res.status(400).send();
    });
});

showcase.patch('/api/showcase/like/:id', (req, res) => {
  const { id } = req.params;
  const { likedStatus } = req.body;
  ShowCase.findByIdAndUpdate(id, { likedStatus: !likedStatus },
    { new: true, useFindAndModify: false })
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.log('Error PATCHING liked status', err);
      res.status(400).send();
    });
});

module.exports = showcase;

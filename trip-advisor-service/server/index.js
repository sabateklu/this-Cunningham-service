const express = require('express');
const { ShowCase } = require('../db/index.js');

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('../public'));

app.get('/api/showcase/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  ShowCase.findById(id)
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.log('Error GETTING by ID', err);
      res.status(400).send();
    });
});

app.patch('/api/showcase/like/:id', (req, res) => {
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

app.listen(port, (err) => {
  if (err) {
    console.log('Error Starting server');
  } else {
    console.log('Server Running on Port: ', port);
  }
});

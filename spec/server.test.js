/**
 * @jest-environment node
 */
const request = require('supertest');
const express = require('express');
const showcase = require('../server/showcase');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', showcase);

describe('showcase Routes', () => {
  test('/api/showcase route works', (done) => {
    request(app).get('/api/showcase')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

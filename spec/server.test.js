/**
 * @jest-environment node
 */
import 'regenerator-runtime/runtime';

const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const showcase = require('../server/showcase');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', showcase);

describe('showcase Routes', () => {
  afterEach(() => {
    mongoose.connection.close();
  });
  test('/api/showcase route works', async (done) => {
    const response = await request(app).get('/api/showcase');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('json');
    expect(response.body[0].overview.description).toBeTruthy();
    expect(typeof response.body[0].overview).toEqual('object');
    expect(Array.isArray(response.body[0].relativeRanking)).toBeTruthy();
    console.log(response.body[0])
    done();
  });
});

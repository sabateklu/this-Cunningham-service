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
  afterAll(() => {
    mongoose.connection.close();
  });
  test('/api/showcase GET route works', async (done) => {
    const response = await request(app).get('/api/showcase');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('json');
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body[0].overview.description).toBeTruthy();
    expect(typeof response.body[0].overview).toEqual('object');
    expect(Array.isArray(response.body[0].relativeRanking)).toBeTruthy();
    done();
  });
  test('/api/showcase/:id GET route', async (done) => {
    const id = '6001f45dc6cc5d2005f7d2cd';
    const response = await request(app).get(`/api/showcase/${id}`);
    expect(response.status).toBe(200);
    expect(response.req.path).toBe('/api/showcase/6001f45dc6cc5d2005f7d2cd');
    expect(response.headers['content-type']).toContain('json');
    expect(response.body.overview.description).toBeTruthy();
    expect(typeof response.body.overview).toEqual('object');
    expect(Array.isArray(response.body.relativeRanking)).toBeTruthy();
    done();
  });
  test('/api/showcase/:id GET route bad request', async (done) => {
    const response = await request(app).get('/api/showcase/s');
    expect(response.status).toBe(400);
    done();
  });
  test('/api/showcase/like/:id PATCH route', async (done) => {

    done();
  });
});

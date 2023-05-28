const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose'); // Add this line to import mongoose

describe("test suite 1:", () => {
  let server;

  beforeAll(async () => {
    server = await app.listen();
  });

  afterAll(async () => {
    await server.close();
    await mongoose.connection.close();
  });

  test("test 1:", async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });

  test("test 2:", async () => {
    const res = await request(app).get('/1234');
    expect(res.statusCode).toEqual(404);
  });
});
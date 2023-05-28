const request = require('supertest');
const app = require('../server');

describe("test suite 1:", () => {
  beforeAll((done) => {
    app.listen(done);
  });

  test("test 1:", async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });

  test("test 2:", async () => {
    const res = await request(app).get('/1234');
    expect(res.statusCode).toEqual(404);
  });

  afterAll((done) => {
    // Close the MongoDB connection
    mongoose.connection.close(() => {
      done();
    });
  });
});
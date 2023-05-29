const request = require('supertest');
const app = require('../server');
const app2 = require('../index');

describe('Grade Form Input Tests', () => {
  let server;

  beforeAll(() => {
    server = app.listen(3000);
  });

  afterAll((done) => {
    server.close(done);
  });

  test('Submitting valid input should return 200', async () => {
    const validInput = {
      fullName: 'John Doe',
      grade1: 85,
      grade2: 92,
      grade3: 78
    };

    const res = await request(app)
      .post('/grades')
      .send(validInput);

    expect(res.statusCode).toEqual(200);
  });
});
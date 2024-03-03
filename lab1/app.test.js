//app.test.js
const app = require('./server');
const supertest = require('supertest');
const request = supertest(app);

it('gets the test endpoint', async done => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
    done();
});

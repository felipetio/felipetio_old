import test from 'ava';

const request = require('supertest');
const app = require('./app.js');

test('check status', async t => {
  const response = await request(app)
    .get('/');
    t.is(response.status, 200);
    t.pass(response.text.match(/hello world!/));
})
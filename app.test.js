import test from 'ava';

const request = require('supertest');
const app = require('./app.js');

test('check status', async t => {
  const response = await request(app)
    .get('/');
    t.is(response.status, 200);
    t.pass(response.text.match(/F1A2 B49A BBC9 E883 A99B 6130 A88C 0EF4 F9CF 7E33/));
})
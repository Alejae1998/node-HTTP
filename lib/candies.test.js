import request from 'supertest';
import app from './app.js';

it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).get('/not-found');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});

it('Returns 404 not found on bad method', async () => {
  const { text, status } = await request(app)
    .patch('/api/v1/candies')
    .send({ value: 'nonsense' });
  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});

it('Returns 200 on #GET candies', async () => {
  const { text, status } = await request(app)
  .get('/api/v1/candies');

  expect(status).toBe(200);
  expect.any(String);
});

it('POST /candies returns 200', async  () => {
  await request(app)
  .post('/api/v1/candies')
  .send({ name: 'Pumpkin Bread', flavor: 'Pumpkin' })
  .expect(200);
  await request(app).get('/api/v1/candies').expect(200);
});

it('returns 200 on #PUT', async () => {
  await request(app).put('/api/v1/candies').expect(200);
  await request(app).get('/api/v1/candies').expect(200);
  expect((res) => {
    res.body.data[0].sweet = 'true';
  });
});

it('returns 204 on #DELETE', async () => {
  await request(app)
  .delete('/api/v1/candies')
  .expect(204);
});

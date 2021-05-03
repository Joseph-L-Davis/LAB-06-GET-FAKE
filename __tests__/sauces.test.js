import app from '../lib/app.js';
import supertest from 'supertest';
const request = supertest(app);

// If a GET reqest is made to /api/sauce
// does the server respond with status of 200
// and body matching the cats data?
it('GET /api/cats', async () => {
  const expected = [{
    name: 'Aardvark',
    location: 'Oregon',
    scoville: '5,000',
    url: 'sauces/aardvark.jpg'
  }];

  const response = await request.get('/api/sauces');

  expect(response.status).toBe(200); // 200 = OK
  expect(response.body).toEqual(expected);

});
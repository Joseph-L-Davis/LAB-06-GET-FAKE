import app from '../lib/app.js';
import supertest from 'supertest';
const request = supertest(app);

// If a GET reqest is made to /api/sauce
// does the server respond with status of 200
// and body matching the cats data?
test('GET /api/sauces', async () => {
  const expected = [
    {
      name: 'Aardvark',
      location: 'Oregon',
      scoville: '5,000',
      url: 'sauces/aardvark.jpg'
    },
    {
      name: 'Apocalypse',
      location: 'Pennsylvania',
      scoville: '500,000',
      url: 'sauces/zombie.jpg'
    },
    {
      name: 'Yellow Bird',
      location: 'Texas',
      scoville: '16,000',
      url: 'sauces/yellowbird.jpg'
    },
    {
      name: 'Yucateco',
      location: 'Mexico',
      scoville: '11,600',
      url: 'sauces/yucateco.jpg'
    },
    {
      name: 'Mad Dog 357',
      location: 'Massachusetts',
      scoville: '357,000',
      url: 'sauces/maddog.jpg'
    },
  ];

  const response = await request.get('/api/sauces');

  expect(response.status).toBe(200); // 200 = OK
  expect(response.body).toEqual(expected);

});

test('GET /api/sauces/1', async () => {
  const expected = 
    {
      name: 'Aardvark',
      location: 'Oregon',
      scoville: '5,000',
      url: 'sauces/aardvark.jpg'
    };

  const response = await request.get('/api/sauces/1');

  expect(response.status).toBe(200); // 200 = OK
  expect(response.body).toEqual(expected);
});
/**
 * @jest-environment node 
 */

import nock from 'nock';
import handler from '../pages/api/post';
import { createMocks } from 'node-mocks-http'

describe('Post route', () => {
  beforeEach(() => {
    nock.cleanAll();
  });

  afterAll(() => {
    nock.restore();
  });

  test('get post by id with success', async () => {
    const mockResponse = {
      'id': 123,
      'title': 'El administrador de NASA viajará a Sudamérica, hablará de cooperación',
      'url': 'http://www.nasa.gov/press-release/el-administrador-de-nasa-viajar-a-sudam-rica-hablar-de-cooperaci-n',
      'image_url': 'https://www.nasa.gov/sites/default/files/thumbnails/image/53055306699_f2cc87d539_o.jpg?itok=J4K9KDF0',
      'news_site': 'NASA',
      'summary': 'Como parte de una serie de reuniones con destacados funcionarios gubernamentales, el administrador de la NASA, Bill Nelson, viajará a Brasil, Argentina y Colombia a partir del lunes 24 de julio.',
      'published_at': '2023-07-21T15:34:00Z',
    };

    nock('http://api.spaceflightnewsapi.net')
      .get('/v4/articles/123')
      .reply(200, mockResponse);

    const { req, res } = createMocks({
      method: 'GET',
      query: {
        id: '123'
      }
    })

    await handler(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toEqual(mockResponse);
  });

  test('get post by id when api return not found', async () => {
    nock('https://api.spaceflightnewsapi.net')
      .get('/v4/articles/123')
      .reply(404);

    const { req, res } = createMocks({
      method: 'GET',
      query: {
        id: '123'
      }
    })

    await handler(req, res);
    expect(res._getStatusCode()).toBe(404);
    expect(res._getJSONData()).toEqual({ message: 'Post not found' });
  });
}); 
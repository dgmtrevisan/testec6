/**
 * @jest-environment node 
 */

import nock from 'nock';
import handler from '../pages/api/posts';
import { createMocks } from 'node-mocks-http'

describe('Posts route', () => {
  beforeEach(() => {
    nock.cleanAll();
  });

  afterAll(() => {
    nock.restore();
  });

  test('get posts list with success', async () => {
    const mockResponse = {
      count: 2,
      results: [{
        'id': 123,
        'title': 'El administrador de NASA viajará a Sudamérica, hablará de cooperación',
        'url': 'http://www.nasa.gov/press-release/el-administrador-de-nasa-viajar-a-sudam-rica-hablar-de-cooperaci-n',
        'image_url': 'https://www.nasa.gov/sites/default/files/thumbnails/image/53055306699_f2cc87d539_o.jpg?itok=J4K9KDF0',
        'news_site': 'NASA',
        'summary': 'Como parte de una serie de reuniones con destacados funcionarios gubernamentales, el administrador de la NASA, Bill Nelson, viajará a Brasil, Argentina y Colombia a partir del lunes 24 de julio.',
        'published_at': '2023-07-21T15:34:00Z',
      },
      {
        'id': 456,
        'title': 'El administrador de NASA viajará a Sudamérica, hablará de cooperación',
        'url': 'http://www.nasa.gov/press-release/el-administrador-de-nasa-viajar-a-sudam-rica-hablar-de-cooperaci-n',
        'image_url': 'https://www.nasa.gov/sites/default/files/thumbnails/image/53055306699_f2cc87d539_o.jpg?itok=J4K9KDF0',
        'news_site': 'NASA',
        'summary': 'Como parte de una serie de reuniones con destacados funcionarios gubernamentales, el administrador de la NASA, Bill Nelson, viajará a Brasil, Argentina y Colombia a partir del lunes 24 de julio.',
        'published_at': '2023-07-21T15:34:00Z',
      }]
    };

    nock('https://api.spaceflightnewsapi.net')
      .get('/v4/articles/?offset=0')
      .reply(200, mockResponse);

    const { req, res } = createMocks({
      method: 'GET',
      query: {
        offset: '0',
      }
    })

    await handler(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toEqual(mockResponse);
  });

  test('get posts list when api return not found', async () => {
    nock('https://api.spaceflightnewsapi.net')
      .get('/v4/articles/?offset=0')
      .reply(404);

    const { req, res } = createMocks({
      method: 'GET',
      query: {
        offset: '0',
      }
    })

    await handler(req, res);
    expect(res._getStatusCode()).toBe(404);
    expect(res._getJSONData()).toEqual({ message: 'Posts not found' });
  });
}); 
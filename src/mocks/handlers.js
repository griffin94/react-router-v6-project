import { rest } from 'msw';
import vans from './vans';

export const handlers = [
  rest.get('/vans', (req, res, ctx) => {
    const types = req.url.searchParams.getAll('type');
    const data = vans.filter(
      (van) => !types.length || types.includes(van.type)
    );
    return res(
      ctx.status(200),
      ctx.json({
        vans: data,
      })
    );
  }),
];

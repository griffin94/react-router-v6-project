import { rest } from 'msw';
import vans from './vans';

export const handlers = [
  rest.get('/vans', (req, res, ctx) => {
    const types = req.url.searchParams.getAll('type');
    const data = vans.filter(
      (van) => !types.length || types.includes(van.type)
    );
    return res(ctx.delay(2000), ctx.status(200), ctx.json(data));
  }),
  rest.get('/vans/:id', (req, res, ctx) => {
    const id = req.params.id;
    const data = vans.find((van) => van.id === id);
    return res(ctx.delay(2000), ctx.status(200), ctx.json(data));
  }),
];

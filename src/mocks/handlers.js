import { rest } from 'msw';
import vans from './vans';
import reviews from './reviews';

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

  rest.get('/host/reviews', (req, res, ctx) => {
    const REVIEWS_PER_PAGE = 5;
    const activePage = Number(req.url.searchParams.get('page') || 1);
    const reviewsAmount = reviews.length;
    const pagesAmount = Math.ceil(reviewsAmount / REVIEWS_PER_PAGE);
    const data = reviews.reduce((result, review, idx) => {
      const startIndex = (activePage - 1) * REVIEWS_PER_PAGE;
      const endIndex = startIndex + REVIEWS_PER_PAGE - 1;
      return [
        ...result,
        ...(idx >= startIndex && idx <= endIndex ? [review] : []),
      ];
    }, []);
    return res(
      ctx.delay(500),
      ctx.status(200),
      ctx.json({ activePage, pagesAmount, reviews: data, reviewsAmount })
    );
  }),

  rest.get('/host/vans', (req, res, ctx) => {
    return res(ctx.delay(500), ctx.status(200), ctx.json(vans));
  }),

  rest.get('/host/vans/:id', (req, res, ctx) => {
    const id = req.params.id;
    const data = vans.find((van) => van.id === id);
    return res(ctx.delay(500), ctx.status(200), ctx.json(data));
  }),
];

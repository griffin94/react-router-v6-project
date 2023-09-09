import React from 'react';
import { Await, useLoaderData, useSearchParams } from 'react-router-dom';
import { Pagination, Stack } from 'react-bootstrap';
import { Image, Rating } from '@/components';
import Graph from '/income-graph.png';

const Review = ({ date, name, rating, text }) => (
  <Stack
    className='border-bottom border-secondary'
    gap={2}
  >
    <Rating value={rating} />
    <Stack bsPrefix='hstack'>
      <span className='fw-bold me-2'>{name}</span>
      <span className='text-secondary'>{date}</span>
    </Stack>
    <p>{text}</p>
  </Stack>
);

const HostReviews = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useLoaderData();

  const setPrevPage = () =>
    setSearchParams((currentSearchParams) => {
      const currentPage = Number(currentSearchParams.get('page') || 1);
      if (currentPage > 1) {
        currentSearchParams.set('page', currentPage - 1);
      }
      return currentSearchParams;
    });

  const setNextPage = (pages) =>
    setSearchParams((currentSearchParams) => {
      const currentPage = Number(currentSearchParams.get('page') || 1);
      if (currentPage < pages) {
        currentSearchParams.set('page', currentPage + 1);
      }
      return currentSearchParams;
    });

  const setPage = (page) =>
    setSearchParams((currentSearchParams) => {
      currentSearchParams.set('page', page);
      return currentSearchParams;
    });

  return (
    <React.Suspense fallback={<h1>Loading...</h1>}>
      <Await resolve={data}>
        {({ activePage, pagesAmount, reviews, reviewsAmount }) => (
          <Stack gap={4}>
            <Image
              src={Graph}
              style={{ maxWidth: '400px' }}
            />
            <span className='fw-bold'>{`Reviews (${reviewsAmount})`}</span>
            {reviews.map((review) => (
              <Review
                key={review.id}
                {...review}
              />
            ))}
            <Pagination className='mx-auto'>
              <Pagination.First onClick={() => setPage(1)} />
              <Pagination.Prev onClick={setPrevPage} />
              {[...Array(pagesAmount).keys()].map((page) => (
                <Pagination.Item
                  active={page + 1 === activePage}
                  onClick={(e) => setPage(e.target.textContent)}
                >
                  {page + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next onClick={() => setNextPage(pagesAmount)} />
              <Pagination.Last onClick={() => setPage(pagesAmount)} />
            </Pagination>
          </Stack>
        )}
      </Await>
    </React.Suspense>
  );
};

export default HostReviews;

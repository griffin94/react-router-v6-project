import React from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { Stack } from 'react-bootstrap';
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
  const { data } = useLoaderData();
  return (
    <React.Suspense>
      <Await resolve={data}>
        {(reviews) => (
          <Stack gap={4}>
            <Image
              src={Graph}
              style={{ maxWidth: '400px' }}
            />
            <span className='fw-bold'>{`Reviews (${reviews.length})`}</span>
            {reviews.map((review) => (
              <Review
                key={review.id}
                {...review}
              />
            ))}
          </Stack>
        )}
      </Await>
    </React.Suspense>
  );
};

export default HostReviews;

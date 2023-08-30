import React from 'react';
import { Await, useLoaderData, useNavigate } from 'react-router-dom';
import { Stack } from 'react-bootstrap';
import { Image, Name, Price } from '@/components';

const Vans = ({ children }) => {
  return (
    <Stack className='gap-4'>
      <Name variant='h2'>Your listed vans</Name>
      <Stack
        as='ul'
        className='gap-3 p-0 m-0'
      >
        {children}
      </Stack>
    </Stack>
  );
};

const Van = ({ imageUrl, name, onClick, price }) => (
  <Stack
    as='li'
    bsPrefix='hstack'
    className='bg-white p-3 gap-3 rounded-3'
    onClick={onClick}
  >
    <Image
      alt={name}
      src={imageUrl}
      height='66px'
      width='66px'
    />
    <Stack>
      <Name>{name}</Name>
      <Price>{price}</Price>
    </Stack>
  </Stack>
);

export default () =>
  (({ navigate, data }) => (
    <React.Suspense fallback={<h1>Loading...</h1>}>
      <Await resolve={data}>
        {(vans) => (
          <Vans>
            {vans.map((van) => (
              <Van
                key={van.id}
                onClick={() => navigate(van.id)}
                {...van}
              />
            ))}
          </Vans>
        )}
      </Await>
    </React.Suspense>
  ))({
    navigate: useNavigate(),
    ...useLoaderData(),
  });

import React from 'react';
import { Await, Link, useLoaderData, useLocation } from 'react-router-dom';
import { Container, Stack } from 'react-bootstrap';
import { Badge, Image, Name, Price } from '@/components';

const Van = () => {
  const { data } = useLoaderData();
  const { state } = useLocation();

  return (
    <Container className='d-flex flex-column gap-4 p-4'>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={data}>
          {({ description, imageUrl, name, price, type }) => (
            <>
              <Link
                className='text-decoration-underline'
                to={'..' + (state?.search || '')}
              >
                <i class='bi bi-arrow-left-circle me-2'></i>
                <span>Back to all vans</span>
              </Link>
              <Stack className='flex-column flex-md-row gap-2 gap-md-4'>
                <Image
                  src={imageUrl}
                  alt={name}
                />
                <Stack gap={2}>
                  <Badge type={type} />
                  <Name>{name}</Name>
                  <Price>{price}</Price>
                  <span>{description}</span>
                </Stack>
              </Stack>
            </>
          )}
        </Await>
      </React.Suspense>
    </Container>
  );
};

export default Van;

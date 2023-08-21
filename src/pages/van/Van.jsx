import React from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { Container, Stack } from 'react-bootstrap';
import { Badge, Image, Name, Price } from '../../components';

const Van = () => {
  const { van } = useLoaderData();
  return (
    <Container className='d-flex flex-column flex-md-row gap-2 gap-md-4 p-4'>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={van}>
          {({ description, imageUrl, name, price, type }) => (
            <>
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
            </>
          )}
        </Await>
      </React.Suspense>
    </Container>
  );
};

export default Van;

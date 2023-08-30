import React from 'react';
import { Await, Link, Outlet, useLoaderData } from 'react-router-dom';
import { Stack } from 'react-bootstrap';
import { Badge, Image, Name, Nav, Price } from '@/components';
import { HOST_VAN_NAV, PATHS, ROUTES } from '../';

const HostVan = () => {
  const { data } = useLoaderData();

  return (
    <React.Suspense fallback={<h1>Loading...</h1>}>
      <Await resolve={data}>
        {({ imageUrl, name, price, type }) => (
          <>
            <Link
              className='text-decoration-underline'
              to='..'
            >
              <i class='bi bi-arrow-left-circle me-2'></i>
              <span>Back to all vans</span>
            </Link>
            <Stack className='p-3 rounded-3 bg-white'>
              <Stack
                bsPrefix='hstack'
                gap='3'
              >
                <Image
                  alt={name}
                  src={imageUrl}
                  width='160px'
                  height='160px'
                />
                <Stack gap='3'>
                  <Badge type={type} />
                  <Name>{name}</Name>
                  <Price>{price}</Price>
                </Stack>
              </Stack>
              <Nav
                className='my-3'
                onlyDesktopView
              >
                {HOST_VAN_NAV.map(({ path, name }) => (
                  <Nav.Item
                    to={path}
                    key={path}
                    end={path === PATHS[ROUTES.HOST_VAN_DETAILS]}
                  >
                    {name}
                  </Nav.Item>
                ))}
              </Nav>
              <Outlet context={{ data }} />
            </Stack>
          </>
        )}
      </Await>
    </React.Suspense>
  );
};

export default HostVan;

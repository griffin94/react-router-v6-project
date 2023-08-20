import React from 'react';
import {
  Await,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { Card, Col, Container, Row, Stack } from 'react-bootstrap';
import { Badge, Filters, Image, Price } from '../../components';
import { PATHS, ROUTES } from '../';

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useLoaderData();
  const navigate = useNavigate();

  const setURLSearchParams = (key, value) =>
    setSearchParams((prevSearchParams) => {
      if (Array.isArray(value) && value.length) {
        prevSearchParams.delete(key);
        value.forEach((param) => prevSearchParams.append(key, param));
      } else if (value && !Array.isArray(value)) {
        prevSearchParams.set(key, value);
      } else {
        prevSearchParams.delete(key);
      }
      return prevSearchParams;
    });

  return (
    <Container className='p-4'>
      <Filters onSetFilter={(values) => setURLSearchParams('type', values)}>
        <Filters.Button name='simple'>Simple</Filters.Button>
        <Filters.Button name='luxury'>Luxury</Filters.Button>
        <Filters.Button name='rugged'>Rugged</Filters.Button>
      </Filters>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={data}>
          {({ vans }) => (
            <Row className='g-3'>
              {vans.map(({ id, imageUrl, name, price, type }) => (
                <Col
                  key={id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                >
                  <Card>
                    <Image
                      alt={name}
                      onClick={() => navigate(`${PATHS[ROUTES.VANS]}/${id}`)}
                      src={imageUrl}
                      hover
                    />
                    <Card.Body>
                      <Stack
                        bsPrefix='hstack'
                        className='justify-content-between mb-2'
                      >
                        <Card.Title className='m-0'>{name}</Card.Title>
                        <Price>{price}</Price>
                      </Stack>
                      <Card.Text>
                        <Badge type={type} />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Await>
      </React.Suspense>
    </Container>
  );
};

export default Vans;

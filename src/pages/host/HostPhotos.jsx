import { Await, useRouteLoaderData } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { Image } from '@/components';
import { ROUTES } from '../';

const HostPhotos = () =>
  (({ data }) => (
    <Await resolve={data}>
      {({ imageUrl }) => (
        <Row className='g-3'>
          {/* {images.map((img) => ( */}
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <Image
              height='100%'
              width='100%'
              src={imageUrl}
              hover
            />
          </Col>
          {/* ))} */}
        </Row>
      )}
    </Await>
  ))(useRouteLoaderData(ROUTES.HOST_VAN_DETAILS));

export default HostPhotos;

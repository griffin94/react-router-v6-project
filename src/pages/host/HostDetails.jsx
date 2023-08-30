import { Stack } from 'react-bootstrap';
import { Await, useRouteLoaderData } from 'react-router-dom';
import { ROUTES } from '../';

const HostDetails = () =>
  (({ data }) => (
    <Await resolve={data}>
      {({ description, name, type }) => (
        <Stack gap={2}>
          <div>
            <span className='fw-bold me-2'>Name:</span>
            <span>{name}</span>
          </div>
          <div>
            <span className='fw-bold me-2'>Category:</span>
            <span className='text-capitalize'>{type}</span>
          </div>
          <div>
            <span className='fw-bold me-2'>Description:</span>
            <span>{description}</span>
          </div>
          <div>
            <span className='fw-bold me-2'>Visibility:</span>
            <span>Public</span>
          </div>
        </Stack>
      )}
    </Await>
  ))(useRouteLoaderData(ROUTES.HOST_VAN_DETAILS));

export default HostDetails;

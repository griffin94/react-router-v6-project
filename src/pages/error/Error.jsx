import { useRouteError } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Error = () => {
  const error = useRouteError();
  return (
    <Container className='flex-grow-1 d-flex flex-column align-items-center justify-content-center gap-3'>
      {error?.status ? (
        <span className='h2 fw-bold text-danger m-0'>
          Error status: {error.status}
        </span>
      ) : null}
      {error?.statusText ? (
        <span className='h2 fw-bold text-danger m-0'>
          Error message: {error?.statusText}
        </span>
      ) : null}
    </Container>
  );
};

export default Error;

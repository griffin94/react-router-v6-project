import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { PATHS, ROUTES } from '..';

const NotFound = () => {
  return (
    <Container className='p-4 flex-grow-1 d-flex flex-column align-items-center justify-content-center gap-3'>
      <p className='h2 fw-bold'>
        Sorry, the page you were looking for was not found.
      </p>
      <Button
        style={{
          backgroundColor: '#ff8c38',
        }}
        href={PATHS[ROUTES.HOME]}
        as={Link}
      >
        Return to home
      </Button>
    </Container>
  );
};

export default NotFound;

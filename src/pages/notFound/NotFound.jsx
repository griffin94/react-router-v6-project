import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Button } from '@/components';
import { PATHS, ROUTES } from '..';

const NotFound = () => {
  return (
    <Container className='p-4 flex-grow-1 d-flex flex-column align-items-center justify-content-center gap-3'>
      <p className='h2 fw-bold'>
        Sorry, the page you were looking for was not found.
      </p>
      <Button
        as={Link}
        to={PATHS[ROUTES.HOME]}
        variant='black'
      >
        Return to home
      </Button>
    </Container>
  );
};

export default NotFound;

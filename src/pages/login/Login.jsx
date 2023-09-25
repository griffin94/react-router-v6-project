import {
  Form as RouterForm,
  Link,
  useActionData,
  useNavigation,
  useLocation,
} from 'react-router-dom';
import { Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Button } from '@/components';
import { PATHS, ROUTES } from '../';

const Login = () => {
  const data = useActionData();
  const navigation = useNavigation();
  const { pathname, search } = useLocation();
  return (
    <Container className='p-4 flex-grow-1 d-flex flex-column justify-content-center position-relative'>
      <h2 className='text-center'>Sign in to your account</h2>
      <Row className='justify-content-center'>
        <Col
          xs={12}
          md={10}
          lg={8}
        >
          <Form
            as={RouterForm}
            method='post'
            action={pathname + search}
            replace={true}
          >
            <Form.Group
              className='mb-2'
              controlId='email'
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                isInvalid={data?.error}
              />
            </Form.Group>
            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                isInvalid={data?.error}
              />
              <Form.Control.Feedback type='invalid'>
                {data?.error}
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              variant='orange'
              className='d-flex justify-content-center align-items-center w-100 mt-3'
              disabled={navigation.state === 'submitting'}
            >
              {navigation.state === 'submitting' ? <Spinner /> : 'Sign in'}
            </Button>
          </Form>
        </Col>
      </Row>
      <p className='text-center mt-5'>
        Don’t have an account?{' '}
        <Link
          to={PATHS[ROUTES.REGISTER]}
          style={{
            color: '#FF8C38',
            textDecoration: 'underline',
          }}
        >
          Create one now!
        </Link>
      </p>
    </Container>
  );
};


export default Login;

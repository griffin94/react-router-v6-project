import {
  Form as RouterForm,
  useActionData,
  useNavigation,
} from 'react-router-dom';
import { Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Button } from '@/components';
import { PATHS, ROUTES } from '../';

const Login = () => {
  const data = useActionData();
  const navigation = useNavigation();
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
            action={PATHS[ROUTES.LOGIN]}
          >
            <Form.Group
              className='mb-2'
              controlId='exampleForm.ControlInput1'
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
      <p className='text-center mt-5'>Don’t have an account? Create one now</p>
    </Container>
  );
};

export default Login;

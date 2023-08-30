import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Nav } from '@/components';
import { HOST_NAV, PATHS, ROUTES } from '../';

const Host = () => {
  return (
    <Container className='d-flex flex-column gap-2 gap-md-4 p-4'>
      <Nav onlyDesktopView>
        {HOST_NAV.map(({ path, name }) => (
          <Nav.Item
            to={path}
            key={path}
            end={path === PATHS[ROUTES.HOST_DASHBOARD]}
          >
            {name}
          </Nav.Item>
        ))}
      </Nav>
      <Outlet />
    </Container>
  );
};

export default Host;

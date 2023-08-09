import { Outlet, useParams } from 'react-router-dom';
import { Badge, Nav } from '../../components';
import { VAN_NAV } from '../';
import cs from './Van.module.scss';
import cx from 'classnames';

const Van = () => {
  const { id } = useParams();
  const [imageUrl, name, price, type] = [
    'https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png',
    'Modest Explorer',
    60,
    'simple',
  ];

  return (
    <div className='container p-3'>
      <div className={cx(cs.van)}>
        <header className='d-flex gap-3'>
          <div className={cx(cs.van__imageContainer)}>
            <img
              alt={name}
              className={cx(cs.van__image)}
              src={imageUrl}
            />
          </div>
          <div className='d-flex flex-column gap-3'>
            <Badge type={type} />
            <span className='h2 fw-bold m-0'>{name}</span>
            <span>
              <span className='fw-bold'>${price}</span>/day
            </span>
          </div>
        </header>
        <Nav
          className='my-3'
          onlyDesktopView
        >
          {VAN_NAV.map(({ path, name }) => (
            <Nav.Item
              to={path}
              key={path}
            >
              {name}
            </Nav.Item>
          ))}
        </Nav>
        <Outlet />
      </div>
    </div>
  );
};

export default Van;

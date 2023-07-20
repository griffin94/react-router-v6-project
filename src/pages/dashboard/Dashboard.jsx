import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Nav } from '../../components';
import cs from './Dashboard.module.scss';
import cx from 'classnames';
import { PATHS, NAMES } from '..';

const Dashboard = () => {
  return (
    <div className={cx(cs.page)}>
      <Header title='#VANLIFE'>
        <Nav title='#VANLIFE'>
          {Object.entries(PATHS).map(([ROUTE, PATH]) => (
            <Nav.Item
              to={PATH}
              key={PATH}
            >
              {NAMES[ROUTE]}
            </Nav.Item>
          ))}
        </Nav>
      </Header>
      <main className={cx(cs.main)}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;

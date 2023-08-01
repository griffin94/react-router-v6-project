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
          {Object.entries(NAMES).map(([KEY, NAME]) => (
            <Nav.Item
              to={PATHS[KEY]}
              key={PATHS[KEY]}
            >
              {NAME}
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

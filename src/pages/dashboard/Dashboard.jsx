import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Nav } from '../../components';
import cs from './Dashboard.module.scss';
import cx from 'classnames';

const Dashboard = () => {
  return (
    <div className={cx(cs.page)}>
      <Header title='#VANLIFE'>
        <Nav title='#VANLIFE' />
      </Header>
      <main className={cx(cs.main)}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;

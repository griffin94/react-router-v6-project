import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Image, Nav } from '@/components';
import cs from './Dashboard.module.scss';
import cx from 'classnames';
import { MAIN_NAV } from '..';
import Logo from '/logo.jpg';

const Dashboard = () => (
  <div className={cx(cs.page)}>
    <Header
      title={
        <Image
          src={Logo}
          width='160px'
        />
      }
    >
      <Nav title='#VANLIFE'>
        {MAIN_NAV.map(({ path, name }) => (
          <Nav.Item
            to={path}
            key={path}
          >
            {name}
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

export default Dashboard;

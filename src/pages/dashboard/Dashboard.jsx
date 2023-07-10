import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Nav } from '../../components';

const Dashboard = () => {
  return (
    <div>
      <Header title='#VANLIFE'>
        <Nav title='#VANLIFE' />
      </Header>
      Dashboard
      <Outlet />
    </div>
  );
};

export default Dashboard;

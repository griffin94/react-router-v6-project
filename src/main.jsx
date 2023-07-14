import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './pages';
import './main.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

ReactDOM.createRoot(document.body).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

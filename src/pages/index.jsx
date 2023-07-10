import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Dashboard } from './dashboard';
import { About } from './about';
import { Home } from './home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Dashboard />}
    >
      <Route
        index
        element={<Home />}
      />
      <Route
        path='/about'
        element={<About />}
      />
    </Route>
  )
);

export default router;

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { ROUTES, PATHS, NAMES } from './constans';
import { Dashboard } from './dashboard';
import { About } from './about';
import { Home } from './home';
import { Van } from './van';
import { Vans, loader as vansLoader } from './vans';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={PATHS[ROUTES.HOME]}
      element={<Dashboard />}
    >
      <Route
        index
        element={<Home />}
      />
      <Route
        path={PATHS[ROUTES.ABOUT]}
        element={<About />}
      />
      <Route
        path={PATHS[ROUTES.VAN]}
        element={<Van />}
      />
      <Route
        path={PATHS[ROUTES.VANS]}
        element={<Vans />}
        loader={vansLoader}
      />
    </Route>
  )
);

export { PATHS, ROUTES, NAMES };
export default router;

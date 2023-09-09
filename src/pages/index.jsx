import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { ROUTES, PATHS } from './constans';
import { Dashboard } from './dashboard';
import { About } from './about';
import { Home } from './home';
import {
  Host,
  HostDashboard,
  HostDetails,
  HostIncome,
  HostPhotos,
  HostPricing,
  HostReviews,
  HostVan,
  HostVans,
} from './host';
import { Van, Vans } from './vans';
import { loader } from './api';

// prettier-ignore
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PATHS[ROUTES.HOME]} element={<Dashboard />}>
      <Route index element={<Home />}/>
      <Route path={PATHS[ROUTES.ABOUT]} element={<About />}/>
      
      <Route path={PATHS[ROUTES.VANS]}>
        <Route index element={<Vans />} loader={loader}/>
        <Route path={PATHS[ROUTES.VAN]} element={<Van />} loader={loader}/>
      </Route>

      <Route path={PATHS[ROUTES.HOST]} element={<Host />}>
        <Route index element={<HostDashboard />}/>
        <Route path={PATHS[ROUTES.HOST_INCOME]} element={<HostIncome />}/>
        <Route path={PATHS[ROUTES.HOST_REVIEWS]} element={<HostReviews />} loader={loader}/>
        <Route path={PATHS[ROUTES.HOST_VANS]}>
          <Route index element={<HostVans />} loader={loader}/>
          <Route path={PATHS[ROUTES.HOST_VAN]} element={<HostVan />} loader={loader} id={ROUTES.HOST_VAN_DETAILS}>
            <Route index element={<HostDetails />}/>
            <Route path={PATHS[ROUTES.HOST_VAN_PHOTOS]} element={<HostPhotos />}/>
            <Route path={PATHS[ROUTES.HOST_VAN_PRICING]} element={<HostPricing />}/>
          </Route>
        </Route>
      </Route>
    </Route>
  )
);

export * from './constans';
export default router;

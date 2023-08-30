import { Await, useRouteLoaderData } from 'react-router-dom';
import { Price } from '@/components';
import { ROUTES } from '../';

const HostPricing = () =>
  (({ data }) => (
    <Await resolve={data}>{({ price }) => <Price>{price}</Price>}</Await>
  ))(useRouteLoaderData(ROUTES.HOST_VAN_DETAILS));

export default HostPricing;

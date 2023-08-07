import React from 'react';
import {
  Await,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { Filters, ProductList } from '../../components';
import { PATHS, ROUTES } from '../';
import cs from './Vans.module.scss';
import cx from 'classnames';

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useLoaderData();
  const navigate = useNavigate();

  const setURLSearchParams = (key, value) =>
    setSearchParams((prevSearchParams) => {
      if (Array.isArray(value) && value.length) {
        prevSearchParams.delete(key);
        value.forEach((param) => prevSearchParams.append(key, param));
      } else if (value && !Array.isArray(value)) {
        prevSearchParams.set(key, value);
      } else {
        prevSearchParams.delete(key);
      }
      return prevSearchParams;
    });

  return (
    <div className={cx(cs.page)}>
      <Filters onSetFilter={(values) => setURLSearchParams('type', values)}>
        <Filters.Button name='simple'>Simple</Filters.Button>
        <Filters.Button name='luxury'>Luxury</Filters.Button>
        <Filters.Button name='rugged'>Rugged</Filters.Button>
      </Filters>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={data}>
          {({ vans }) => (
            <ProductList>
              {vans.map(({ id, ...van }) => (
                <ProductList.Item
                  key={id}
                  onClick={() => navigate(`${PATHS[ROUTES.VANS]}/${id}`)}
                  {...van}
                />
              ))}
            </ProductList>
          )}
        </Await>
      </React.Suspense>
    </div>
  );
};

export default Vans;

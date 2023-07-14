import React from 'react';
import cs from './Home.module.scss';
import cx from 'classnames';

const Home = () => {
  return (
    <div className={cx(cs.hero)}>
      <div className={cx(cs.hero__interior)}>
        <h1 className={cx(cs.hero__heading)}>
          You got the travel plans, we got the travel vans.
        </h1>
        <p className={cx(cs.hero__paragraph)}>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button className={cx(cs.hero__button)}>Find your van</button>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import cx from 'classnames';
import cs from './Hero.module.scss';

const Hero = ({ children, className, img }) => {
  return (
    <div
      className={cx(cs.hero, className)}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className={cx(cs.hero__interior)}>{children}</div>
    </div>
  );
};

export default Hero;

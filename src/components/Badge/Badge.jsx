import React from 'react';
import cs from './Badge.module.scss';
import cx from 'classnames';

const Badge = ({ type }) => (
  <div
    className={cx(
      cs.badge,
      {
        simple: cs.simple,
        rugged: cs.rugged,
        luxury: cs.luxury,
      }[type]
    )}
  >
    {type}
  </div>
);

export default Badge;

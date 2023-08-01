import React from 'react';
import cs from './ProductList.module.scss';
import cx from 'classnames';

const ProductList = ({ children }) => (
  <ul className={cx(cs.productList)}>{children}</ul>
);

const Item = ({ imageUrl, name, price, type }) => (
  <li className={cx(cs.item)}>
    <img
      className={cx(cs.item__img)}
      src={imageUrl}
      alt={'dsa'}
    />
    <div className={cx(cs.item__header)}>
      <span className={cx(cs.item__name)}>{name}</span>
      <span>
        <span className={cx(cs.item__price)}>${price}</span>/day
      </span>
    </div>
    <div
      className={cx(
        cs.item__badge,
        {
          simple: cs.simple,
          rugged: cs.rugged,
          luxury: cs.luxury,
        }[type]
      )}
    >
      {type}
    </div>
  </li>
);

export default Object.assign(ProductList, {
  Item,
});

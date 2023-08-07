import cs from './ProductList.module.scss';
import cx from 'classnames';

const ProductList = ({ children }) => (
  <ul className={cx(cs.productList)}>{children}</ul>
);

const Item = ({ imageUrl, name, onClick, price, type }) => (
  <li className={cx(cs.item)}>
    <div
      className={cx(cs.item__imgContainer)}
      onClick={onClick}
    >
      <img
        className={cx(cs.item__img)}
        src={imageUrl}
        alt={name}
      />
    </div>
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

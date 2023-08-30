import cx from 'classnames';

const Name = ({ children, variant = 'h3' }) => (
  <span className={cx('fw-bold m-0', variant)}>{children}</span>
);

export default Name;

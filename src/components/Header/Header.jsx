import { Link } from 'react-router-dom';
import cs from './Header.module.scss';
import cx from 'classnames';

const Header = ({ children, title }) => {
  return (
    <header className={cx(cs.header)}>
      <h1>
        <Link to='/'>{title}</Link>
      </h1>
      {children}
    </header>
  );
};

export default Header;

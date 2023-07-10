import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
import cs from './Nav.module.scss';
import cx from 'classnames';
import { useViewport } from '../../hooks';

const CloseIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    fill='currentColor'
    class='bi bi-x-square'
    viewBox='0 0 16 16'
  >
    <path d='M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z' />
    <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
  </svg>
);

const MenuIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    fill='currentColor'
    class='bi bi-list'
    viewBox='0 0 16 16'
  >
    <path
      fill-rule='evenodd'
      d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
    />
  </svg>
);

const Nav = ({ title }) => {
  const [open, setOpen] = useState(false);
  const { isMobileView } = useViewport();

  return (
    <>
      {!isMobileView && (
        <nav className={cx(cs.desktopNav)}>
          <ul className={cx(cs.desktopNav__list)}>
            <li className={cx(cs.desktopNav__item)}>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li className={cx(cs.desktopNav__item)}>
              <NavLink to='/about'>About</NavLink>
            </li>
          </ul>
        </nav>
      )}
      {isMobileView && (
        <button
          className={cx(cs.nav__button)}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </button>
      )}
      {isMobileView &&
        createPortal(
          <nav className={cx(cs.nav, open && cs.open)}>
            <div className={cx(cs.nav__header)}>
              <h1>
                <Link to='/'>{title}</Link>
              </h1>
              <button
                className={cx(cs.nav__button)}
                onClick={() => setOpen(false)}
              >
                <CloseIcon />
              </button>
            </div>
            <ul className={cx(cs.nav__list)}>
              <li className={cx(cs.nav__item)}>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li className={cx(cs.nav__item)}>
                <NavLink to='/about'>About</NavLink>
              </li>
            </ul>
          </nav>,
          document.body
        )}
    </>
  );
};

export default Nav;

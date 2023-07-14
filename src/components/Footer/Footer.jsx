import cs from './Footer.module.scss';
import cx from 'classnames';

const getCurrentYear = () => new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={cx(cs.footer)}>
      &copy; {getCurrentYear()} #VANLIFE
    </footer>
  );
};

export default Footer;

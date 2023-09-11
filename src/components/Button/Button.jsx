import cx from 'classnames';
import cs from './Button.module.scss';

const Button = ({
  as: Component = 'button',
  children,
  isActive,
  variant,
  ...props
}) => (
  <Component
    className={cx(cs.button, cs[variant], isActive && cs.active)}
    {...props}
  >
    {children}
  </Component>
);

export default Button;

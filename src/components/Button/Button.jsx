import cx from 'classnames';
import cs from './Button.module.scss';

const Button = ({
  as: Component = 'button',
  children,
  className,
  isActive,
  variant,
  ...props
}) => (
  <Component
    className={cx(cs.button, cs[variant], isActive && cs.active, className)}
    {...props}
  >
    {children}
  </Component>
);

export default Button;

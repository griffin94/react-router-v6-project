import cx from 'classnames';
import cs from './Image.module.scss';

const Image = ({ className, height, hover, onClick, width, ...props }) => (
  <div
    className={cx(cs.container, className)}
    onClick={onClick}
    {...(height || width
      ? {
          style: {
            ...(height ? { height } : {}),
            ...(width ? { width } : {}),
          },
        }
      : {})}
  >
    <img
      className={cx(cs.image, hover && cs.hover, onClick && cs.clickable)}
      {...props}
    />
  </div>
);

export default Image;

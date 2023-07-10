import { useLayoutEffect, useState } from 'react';

const useViewport = () => {
  const [isMobileView, setMobileView] = useState(undefined);

  useLayoutEffect(() => {
    const resizeHandler = () => {
      window.innerWidth < 600 ? setMobileView(true) : setMobileView(false);
    };
    resizeHandler();

    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return {
    isMobileView,
  };
};

export default useViewport;

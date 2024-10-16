import { useState, useEffect } from 'react';

const useWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const windowWidthHandler = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', windowWidthHandler);

    return () => {
      window.removeEventListener('resize', windowWidthHandler);
    };
  }, []);

  return windowWidth;
};

export default useWidth;

import { useEffect, useState } from 'react';

function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(null); // start with null or a fallback

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    handleResize(); // set initial screen width
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenWidth;
}

export default useScreenWidth;

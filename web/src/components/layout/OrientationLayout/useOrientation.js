import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import getScreenOrientation from './getScreenOrientation';

const UseOrientation = () => {
  const [orientation, setOrientation] = useState();

  const handleResizeDebounced = () => setOrientation(getScreenOrientation());

  const handleResize = debounce(handleResizeDebounced, 300);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { orientation };
};

export default UseOrientation;

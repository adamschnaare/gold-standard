import OrientationTypes from '../constants/orientationTypes';

const getScreenOrientation = () => {
  if (window.innerHeight > window.innerWidth) return OrientationTypes.PORTRAIT;
  return OrientationTypes.LANDSCAPE;
};

export default getScreenOrientation;

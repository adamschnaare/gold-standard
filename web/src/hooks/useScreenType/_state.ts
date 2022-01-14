import { atom } from 'recoil';

import { getScreenSize, getScreenType } from './index';

export const screenSizeState = atom({
  key: 'screenSizeState',
  default: getScreenSize(),
});

export const screenTypeState = atom({
  key: 'screenTypeState',
  default: getScreenType(getScreenSize()),
});

import useOrientation from './useOrientation';

export const ORIENTATION_TYPES = {
  LANDSCAPE: 'LANDSCAPE',
  PORTRAIT: 'PORTRAIT',
};

export default function ({ landscape, portrait }) {
  const { orientation } = useOrientation();

  if (orientation === ORIENTATION_TYPES.LANDSCAPE && landscape)
    return landscape;
  return portrait;
}

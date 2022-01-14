import { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { screenTypeState } from '@hooks/useScreenType/_state'
import { SCREEN_TYPES } from '@hooks/useScreenType/_types'

const ScreenTypeLayout: FC<any> = ({ mobile, tablet, desktop }) => {
  const screenType = useRecoilValue(screenTypeState)

  if (screenType === SCREEN_TYPES.TABLET && tablet) return tablet
  if (screenType === SCREEN_TYPES.DESKTOP && desktop) return desktop
  return mobile
}

export default ScreenTypeLayout

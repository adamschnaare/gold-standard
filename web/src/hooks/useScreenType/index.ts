import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import debounce from 'lodash.debounce'
import { screenSizeState, screenTypeState } from './_state'
import { SCREEN_TYPES } from './_types'

export const getScreenSize = () => {
  const screenWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  )
  const screenHeight = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  )

  return { screenWidth, screenHeight }
}

export const getScreenType = ({ screenWidth }: { screenWidth: number }) => {
  if (screenWidth > 950) return SCREEN_TYPES.DESKTOP
  if (screenWidth > 600) return SCREEN_TYPES.TABLET
  return SCREEN_TYPES.MOBILE
}

export default function useScreenType() {
  const [, setScreenSize] = useRecoilState(screenSizeState)
  const [, setScreenType] = useRecoilState(screenTypeState)

  const handleResizeDebounced = () => {
    const screenSize = getScreenSize()
    const screenType = getScreenType(screenSize)
    setScreenSize(screenSize)
    setScreenType(screenType)
  }

  const handleResize = debounce(handleResizeDebounced, 300)

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])
}

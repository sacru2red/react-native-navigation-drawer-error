import { StyleSheet } from 'react-native'

export const MAX_SCREEN_WIDTH = 1100
export const MIN_SCREEN_WIDTH = 280 // 갤럭시폴드 전면스크린
export const HEADER_HEIGHT = 64

export const globalStyles = StyleSheet.create({
  screenSize: {
    minWidth: MIN_SCREEN_WIDTH,
    maxWidth: MAX_SCREEN_WIDTH
  }
})

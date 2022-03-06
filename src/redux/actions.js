import { SET_FONT_LOADED, SET_IS_MOBILE } from "./types"

export const setFontLoaded = payload => ({
  type: SET_FONT_LOADED,
  payload,
})

export const setIsMobile = payload => ({
  type: SET_IS_MOBILE,
  payload,
})

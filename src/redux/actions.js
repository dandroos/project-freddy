import { SET_FONT_LOADED, SET_IS_MOBILE, SET_MOBILE_MENU } from "./types"

export const setFontLoaded = payload => ({
  type: SET_FONT_LOADED,
  payload,
})

export const setIsMobile = payload => ({
  type: SET_IS_MOBILE,
  payload,
})

export const setMobileMenu = payload => ({
  type: SET_MOBILE_MENU,
  payload,
})

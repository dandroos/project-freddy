import { SET_FONT_LOADED, SET_IS_MOBILE, SET_MOBILE_MENU } from "./types"

const initialState = {
  fontLoaded: false,
  isMobile: null,
  mobileMenu: false,
}

export const reducer = (state = initialState, { type, payload }) => {
  console.log(type, payload)
  const newState = Object.assign({}, state)

  switch (type) {
    case SET_FONT_LOADED:
      newState.fontLoaded = payload
      break
    case SET_IS_MOBILE:
      newState.isMobile = payload
      break
    case SET_MOBILE_MENU:
      newState.mobileMenu = payload
      break
    default:
      break
  }
  return newState
}

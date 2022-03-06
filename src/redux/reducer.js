import { SET_FONT_LOADED, SET_IS_MOBILE } from "./types"

const initialState = {
  fontLoaded: false,
  isMobile: null,
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
    default:
      break
  }
  return newState
}

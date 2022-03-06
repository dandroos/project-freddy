import { SET_FONT_LOADED } from "./types"

const initialState = {
  fontLoaded: false,
}

export const reducer = (state = initialState, { type, payload }) => {
  console.log(type, payload)
  const newState = Object.assign({}, state)

  switch (type) {
    case SET_FONT_LOADED:
      newState.fontLoaded = payload
      break
    default:
      break
  }
  return newState
}

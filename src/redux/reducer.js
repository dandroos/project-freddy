import {
  SET_FONT_LOADED,
  SET_IS_MOBILE,
  SET_MOBILE_MENU,
  SET_COURSES,
  SET_BOOKING_FORM,
} from "./types"

const initialState = {
  fontLoaded: false,
  isMobile: null,
  mobileMenu: false,
  courses: [],
  bookingForm: {
    isOpen: false,
    selectedCourse: null,
  },
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
    case SET_COURSES:
      newState.courses = payload
      break
    case SET_BOOKING_FORM:
      newState.bookingForm = payload
      break
    default:
      break
  }
  return newState
}

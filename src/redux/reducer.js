import {
  SET_BOOKING_FORM,
  SET_COURSES,
  SET_FONT_LOADED,
  SET_IS_MOBILE,
  SET_MOBILE_MENU,
  SET_SITE_READY,
  SET_TOAST,
} from "./types"

const initialState = {
  siteReady: false,
  fontLoaded: false,
  isMobile: null,
  mobileMenu: false,
  courses: [],
  bookingForm: {
    isOpen: false,
    selectedCourse: null,
  },
  toast: {
    open: false,
    msg: "",
    severity: "success",
  },
}

export const reducer = (state = initialState, { type, payload }) => {
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
    case SET_SITE_READY:
      newState.siteReady = payload
      break
    case SET_TOAST:
      newState.toast = payload
      break
    default:
      break
  }
  return newState
}

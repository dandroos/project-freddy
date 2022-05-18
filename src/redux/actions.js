import {
  SET_FONT_LOADED,
  SET_IS_MOBILE,
  SET_MOBILE_MENU,
  SET_COURSES,
  SET_BOOKING_FORM,
} from "./types"

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

export const setCourses = payload => ({
  type: SET_COURSES,
  payload,
})

export const setBookingForm = payload => ({
  type: SET_BOOKING_FORM,
  payload,
})

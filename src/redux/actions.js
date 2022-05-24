import {
  SET_BOOKING_FORM,
  SET_COURSES,
  SET_FONT_LOADED,
  SET_IS_MOBILE,
  SET_MOBILE_MENU,
  SET_PAGE_TITLE,
  SET_SITE_READY,
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

export const setSiteReady = payload => ({
  type: SET_SITE_READY,
  payload,
})

export const setPageTitle = payload => ({
  type: SET_PAGE_TITLE,
  payload,
})

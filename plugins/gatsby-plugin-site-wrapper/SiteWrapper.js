import { CssBaseline, ThemeProvider } from "@mui/material"

import LoadingScreen from "../../src/components/LoadingScreen"
import NetlifyBookingForms from "../../src/components/NetlifyBookingForms"
import React from "react"
import { theme } from "../../src/theme"

const SiteWrapper = ({ children }) => {
  return (
    <>
      <NetlifyBookingForms />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LoadingScreen />
        {children}
      </ThemeProvider>
    </>
  )
}

export default SiteWrapper

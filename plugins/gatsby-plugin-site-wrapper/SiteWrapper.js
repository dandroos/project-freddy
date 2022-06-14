import { CssBaseline, ThemeProvider } from "@mui/material"

import { Helmet } from "react-helmet"
import NetlifyBookingForms from "../../src/components/NetlifyBookingForms"
import React from "react"
import { theme } from "../../src/theme"

const SiteWrapper = ({ children }) => {
  return (
    <>
      <NetlifyBookingForms />
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  )
}

export default SiteWrapper

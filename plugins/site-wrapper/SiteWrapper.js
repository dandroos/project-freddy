import React from "react"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { theme } from "../../src/theme"
import { Helmet } from "react-helmet"
import config from "../../style"

const SiteWrapper = ({ children }) => {
  return (
    <>
      <Helmet>
        <link href={config.typography.secondary.cdnLink} rel="stylesheet" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  )
}

export default SiteWrapper

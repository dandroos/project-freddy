import React from "react"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { theme, themeConfig } from "../../src/theme"
import { Helmet } from "react-helmet"

const SiteWrapper = ({ children }) => {
  return (
    <>
      <Helmet>
        <link href={themeConfig.typography.cdnLink} rel="stylesheet" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  )
}

export default SiteWrapper

const { createTheme, responsiveFontSizes } = require("@mui/material")

export const themeConfig = {
  palette: {
    main: "#663399",
  },
  typography: {
    family: "Avenir",
    cdnLink: "http://fonts.cdnfonts.com/css/avenir",
  },
}

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: themeConfig.palette.main,
      },
    },
    typography: {
      fontFamily: themeConfig.typography.family,
    },
  })
)

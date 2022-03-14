const { createTheme, responsiveFontSizes } = require("@mui/material")
const config = require("../style")

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: config.palette.main,
      },
      secondary: {
        main: config.palette.secondary,
      },
      common: {
        black: "#1F1714",
        white: "#EBE3E0",
      },
      background: {
        default: "#EBE3E0",
      },
      text: { primary: "#1F1714" },
    },
    typography: {
      fontFamily: config.typography.secondary.family,
      lead: {
        fontSize: "1.2rem",
        lineHeight: 1.8,
      },
      nav: {
        fontSize: "1.2rem",
        lineHeight: 1,
        textTransform: "uppercase",
        letterSpacing: 1.5,
      },
      h1: {
        fontFamily: config.typography.primary,
      },
      h2: {
        fontFamily: config.typography.primary,
      },
      h3: {
        fontFamily: config.typography.primary,
      },
      h4: {
        fontFamily: config.typography.primary,
      },
      h5: {
        fontFamily: config.typography.primary,
      },
      h6: {
        fontFamily: config.typography.primary,
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: "contained",
        },
      },
      MuiTextField: {
        defaultProps: {
          fullWidth: true,
          required: true,
        },
      },
    },
  })
)

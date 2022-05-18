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
        black: config.palette.dark,
        white: config.palette.light,
      },
      background: {
        default: config.palette.light,
      },
      text: { primary: config.palette.dark },
      facebook: {
        main: "#1877f2",
      },
      twitter: {
        main: "#1da1f2",
      },
      whatsapp: {
        main: "#25d366",
      },
      gmail: {
        main: "#ea4335",
      },
    },
    typography: {
      fontFamily: config.typography.secondary,
      lead: {
        "@media (min-width:600px)": {
          fontSize: "1.2rem",
        },
        "@media (min-width:900px)": {
          fontSize: "1.3rem",
        },
        "@media (min-width:1200px)": {
          fontSize: "1.4rem",
        },
        fontSize: "1.15rem",
      },
      nav: {
        fontSize: "1.1rem",
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
          InputLabelProps: {
            required: false,
          },
        },
      },
      MuiLink: {
        defaultProps: {
          underline: "hover",
          sx: { cursor: "pointer" },
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: "md",
        },
      },
    },
  })
)

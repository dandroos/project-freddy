import { Box, Toolbar, useMediaQuery, useTheme } from "@mui/material"
import React, { useEffect } from "react"
import Footer from "./Footer"
import Header from "./Header"
import FontFaceObserver from "fontfaceobserver"
import { connect } from "react-redux"
import { setFontLoaded, setIsMobile } from "../redux/actions"
import { AnimatePresence, motion } from "framer-motion"
import config from "../../style"

const Layout = ({ dispatch, location, children }) => {
  useEffect(() => {
    const loadFont = () => {
      const font = new FontFaceObserver(config.typography.secondary.family)

      font.load().then(() => {
        dispatch(setFontLoaded(true))
      }, loadFont)
    }
    loadFont()
    //eslint-disable-next-line
  }, [])

  const isMobile = useMediaQuery(useTheme().breakpoints.down("md"))

  useEffect(() => {
    dispatch(setIsMobile(isMobile))
    //eslint-disable-next-line
  }, [isMobile])

  return (
    <Box display="flex" minHeight="100vh" flexDirection="column">
      <Box component="header">
        <Header />
      </Box>
      <AnimatePresence exitBeforeEnter>
        <Box
          sx={
            isMobile ? undefined : { width: `calc(100% - 350px)`, ml: `350px` }
          }
          display="flex"
          flexDirection="column"
          flexGrow={1}
          justifyContent="space-between"
          key={location.pathname}
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            component="main"
            display="flex"
            flexDirection="column"
            minHeight="100vh"
            flexGrow={1}
            sx={{ py: 2 }}
          >
            {isMobile && <Toolbar />}
            {children}
          </Box>
          <Box
            component="footer"
            // bgcolor="primary.dark"
            color="primary.contrastText"
            textAlign="center"
          >
            <Footer />
          </Box>
        </Box>
      </AnimatePresence>
    </Box>
  )
}

export default connect()(Layout)

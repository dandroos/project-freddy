import { Box } from "@mui/material"
import React, { useEffect } from "react"
import Footer from "./Footer"
import Header from "./Header"
import FontFaceObserver from "fontfaceobserver"
import { themeConfig } from "../theme"
import { connect } from "react-redux"
import { setFontLoaded } from "../redux/actions"
import { AnimatePresence, motion } from "framer-motion"

const Layout = ({ dispatch, location, children }) => {
  useEffect(() => {
    const loadFont = () => {
      const font = new FontFaceObserver(themeConfig.typography.family)

      font.load().then(() => {
        dispatch(setFontLoaded(true))
      }, loadFont)
    }
    loadFont()
    //eslint-disable-next-line
  }, [])
  return (
    <Box display="flex" minHeight="100vh" flexDirection="column">
      <Box component="header" py={2}>
        <Header />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        flexGrow={1}
        justifyContent="space-between"
      >
        <AnimatePresence exitBeforeEnter>
          <Box
            key={location.pathname}
            component={motion.main}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </Box>
        </AnimatePresence>
        <Box component="footer" py={3}>
          <Footer />
        </Box>
      </Box>
    </Box>
  )
}

export default connect()(Layout)

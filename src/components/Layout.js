import { AnimatePresence, motion } from "framer-motion"
import { Box, Fade, Toolbar, useMediaQuery, useTheme } from "@mui/material"
import React, { useEffect, useState } from "react"
import { setIsMobile, setSiteReady } from "../redux/actions"

import BookingForm from "./BookingForm"
import FontFaceObserver from "fontfaceobserver"
import Footer from "./Footer"
import Header from "./Header"
import MobileFab from "./MobileFab"
import config from "../../style"
import { connect } from "react-redux"

const Layout = ({ dispatch, location, children }) => {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    const loadFont = () => {
      const font = new FontFaceObserver(config.typography.secondary)

      font.load().then(() => {
        setFontLoaded(true)
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
    <>
      {fontLoaded && (
        <Box display="flex" minHeight="100vh" flexDirection="column">
          {isMobile && <MobileFab />}
          <BookingForm />
          <Fade in onEntered={() => dispatch(setSiteReady(true))}>
            <Box component="header">
              <Header />
            </Box>
          </Fade>
          <AnimatePresence exitBeforeEnter>
            <Box
              sx={
                isMobile
                  ? undefined
                  : { width: `calc(100% - 300px)`, ml: `300px` }
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
                sx={{ pb: location.pathname !== "/" ? 2 : 0 }}
              >
                {isMobile && location.pathname !== "/" && <Toolbar />}
                {children}
              </Box>
              <Box
                component="footer"
                color="primary.contrastText"
                textAlign="center"
              >
                <Footer />
              </Box>
            </Box>
          </AnimatePresence>
        </Box>
      )}
    </>
  )
}

const stp = s => ({
  siteReady: s.siteReady,
})

export default connect(stp)(Layout)

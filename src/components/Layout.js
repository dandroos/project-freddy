import { AnimatePresence, motion } from "framer-motion"
import { Box, Toolbar, useMediaQuery, useTheme } from "@mui/material"
import React, { useEffect } from "react"
import { setIsMobile, setSiteReady } from "../redux/actions"

import BookingFormDialog from "./BookingFormDialog"
import FontFaceObserver from "fontfaceobserver"
import Footer from "./Footer"
import Header from "./Header"
import MobileFab from "./MobileFab"
import Toast from "./Toast"
import config from "../../style"
import { connect } from "react-redux"

const Layout = ({ dispatch, location, children }) => {
  useEffect(() => {
    const loadFont = () => {
      const fontA = new FontFaceObserver(config.typography.secondary)
      const fontB = new FontFaceObserver(config.typography.primary)
      Promise.all([fontA.load(), fontB.load()]).then(function () {
        dispatch(setSiteReady(true))
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
      <Box display="flex" minHeight="100vh" flexDirection="column">
        {isMobile && <MobileFab />}
        <Toast />
        <BookingFormDialog />
        <Box component="header">
          <Header />
        </Box>
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
              <Footer hideMap={location.pathname === "/contactenos"} />
            </Box>
          </Box>
        </AnimatePresence>
      </Box>
    </>
  )
}

export default connect()(Layout)

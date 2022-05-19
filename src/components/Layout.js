import { AnimatePresence, motion } from "framer-motion"
import { Box, Toolbar, useMediaQuery, useTheme } from "@mui/material"
import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { setCourses, setIsMobile, setSiteReady } from "../redux/actions"

import BookingForm from "./BookingForm"
import FontFaceObserver from "fontfaceobserver"
import Footer from "./Footer"
import Header from "./Header"
import MobileFab from "./MobileFab"
import config from "../../style"
import { connect } from "react-redux"
import uniqid from "uniqid"

const Layout = ({ dispatch, location, children }) => {
  const courses = useStaticQuery(graphql`
    {
      file(
        extension: { eq: "md" }
        name: { eq: "courses" }
        sourceInstanceName: { eq: "content" }
      ) {
        childMarkdownRemark {
          frontmatter {
            course_list {
              course {
                level
                start_time
                finish_time
                min_age
                max_age
                space
                days
              }
            }
          }
        }
      }
    }
  `).file.childMarkdownRemark.frontmatter.course_list.map((i, ind) => {
    return {
      ...i.course,
      start_time: `${i.course.start_time
        .toString()
        .slice(0, -2)}:${i.course.start_time.toString().slice(-2)}`,
      finish_time: `${i.course.finish_time
        .toString()
        .slice(0, -2)}:${i.course.finish_time.toString().slice(-2)}`,
      id: uniqid(),
    }
  })

  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    const loadFont = () => {
      const font = new FontFaceObserver(config.typography.secondary)

      font.load().then(() => {
        setFontLoaded(true)
        dispatch(setSiteReady(true))
      }, loadFont)
    }
    loadFont()

    dispatch(setCourses(courses))
    //eslint-disable-next-line
  }, [])

  const isMobile = useMediaQuery(useTheme().breakpoints.down("md"))

  useEffect(() => {
    dispatch(setIsMobile(isMobile))
    //eslint-disable-next-line
  }, [isMobile])

  return (
    fontLoaded && (
      <Box display="flex" minHeight="100vh" flexDirection="column">
        {isMobile && <MobileFab />}
        <BookingForm />
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
              <Footer />
            </Box>
          </Box>
        </AnimatePresence>
      </Box>
    )
  )
}

export default connect()(Layout)

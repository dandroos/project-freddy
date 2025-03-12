import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material"
import { graphql, navigate, useStaticQuery } from "gatsby"

import { Menu } from "mdi-material-ui"
import MobileMenu from "./MobileMenu"
import NavMenu from "./NavMenu"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { connect } from "react-redux"
import { setMobileMenu } from "../redux/actions"

const Nav = ({ dispatch, isMobile }) => {
  const drawerWidth = 300

  const { mob_title } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          mob_title
        }
      }
    }
  `).site.siteMetadata

  const theme = useTheme()

  return isMobile ? (
    <>
      <MobileMenu />
      <AppBar
        color="primary"
        sx={{ backgroundColor: theme.palette.primary.dark }}
      >
        <Toolbar>
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <StaticImage
              alt="El Rincón de Idiomas logo"
              src="../images/logo-white.png"
              width={45}
            />
            <Typography
              variant="h5"
              variantMapping={{ h5: "h1" }}
              sx={{ ml: 1 }}
              color="common.white"
            >
              {mob_title}
            </Typography>
          </Box>
          <Box flexGrow={1} />
          <IconButton
            color="inherit"
            edge="end"
            onClick={() => dispatch(setMobileMenu(true))}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  ) : (
    <Drawer
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      PaperProps={{ elevation: 8, sx: { borderRight: 0 } }}
      variant="permanent"
      elevation={4}
    >
      <NavMenu />
    </Drawer>
  )
}

const stp = s => ({
  isMobile: s.isMobile,
})

export default connect(stp)(Nav)

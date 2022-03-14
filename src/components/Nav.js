import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { connect } from "react-redux"
import { Menu } from "mdi-material-ui"
import NavMenu from "./NavMenu"
import MobileMenu from "./MobileMenu"
import { setMobileMenu } from "../redux/actions"
import { graphql, Link, useStaticQuery } from "gatsby"

const Nav = ({ dispatch, isMobile }) => {
  const drawerWidth = 350

  const { title } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `).site.siteMetadata

  return isMobile ? (
    <>
      <MobileMenu />
      <AppBar color="primary" variant="outlined">
        <Toolbar>
          <Box
            component={Link}
            to="/"
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <StaticImage src="../images/logo-white.png" width={45} />
            <Typography
              variant="h5"
              variantMapping={{ h5: "h1" }}
              sx={{ ml: 1 }}
              color="common.white"
            >
              {title}
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
      {/* <Box
        py={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        minHeight="100vh"
        bgcolor="primary.dark"
        color={theme.palette.primary.contrastText}
      >
        <StaticImage
          src="../images/logo-white.png"
          width={275}
          style={{ marginBottom: 15 }}
        />
        <List sx={{ width: "100%" }}>
          {nav.internal.map(i => (
            <ListItem
              button
              component={Link}
              to={i.url}
              sx={{ textAlign: "center" }}
            >
              <ListItemText
                primary={i.label}
                // disableTypography
                primaryTypographyProps={{ variant: "nav" }}
              />
            </ListItem>
          ))}
        </List>
      </Box> */}
    </Drawer>
  )
}

const stp = s => ({
  isMobile: s.isMobile,
})

export default connect(stp)(Nav)

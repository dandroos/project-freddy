import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { connect } from "react-redux"
import { setMobileMenu } from "../redux/actions"
import { nav } from "../sitemap"
import { Phone, Whatsapp, Email, Facebook, Instagram } from "mdi-material-ui"

const NavMenu = ({ dispatch, isMobile }) => {
  const theme = useTheme()

  const ContactMethod = ({ Icon, primary, secondary, url }) => (
    <ListItem
      button={Boolean(url)}
      component="a"
      href={url}
      sx={{
        pt: 1,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
      divider
    >
      <ListItemIcon sx={{ minWidth: 0, color: "inherit" }}>
        <Icon />
      </ListItemIcon>
      <ListItemText
        primary={primary}
        primaryTypographyProps={{ sx: { textTransform: "uppercase" } }}
        secondary={secondary}
        secondaryTypographyProps={{ variant: "caption", color: "common.white" }}
        sx={{ my: 0 }}
      />
    </ListItem>
  )
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={isMobile ? `center` : `space-between`}
      width="100%"
      minHeight="100vh"
      bgcolor="primary.dark"
      color={theme.palette.primary.contrastText}
      sx={{ overflowX: "hidden" }}
    >
      <Box
        component={Link}
        to="/"
        sx={{ cursor: "pointer" }}
        width="100%"
        textAlign="center"
        mb={1}
        mt={2}
      >
        <StaticImage
          src="../images/logo-white.png"
          width={220}
          imgStyle={{ height: "100%" }}
          placeholder="none"
        />
      </Box>
      <List sx={{ width: "100%" }}>
        {nav.internal.map(i => (
          <ListItem
            button
            component={Link}
            activeStyle={{ fontWeight: "bold" }}
            to={i.url}
            sx={{
              textAlign: "center",
              backgroundColor: i.special
                ? theme.palette.secondary.main
                : undefined,
              ":hover": {
                backgroundColor: i.special
                  ? theme.palette.secondary.dark
                  : undefined,
              },
            }}
            onClick={
              isMobile ? () => dispatch(setMobileMenu(false)) : undefined
            }
          >
            <ListItemText
              primary={i.label}
              primaryTypographyProps={{ variant: "nav" }}
            />
          </ListItem>
        ))}
      </List>
      <Box my={2} display="flex" justifyContent="center">
        <IconButton sx={{ backgroundColor: "#4267B2", mr: 1 }} color="inherit">
          <Facebook />
        </IconButton>
        <IconButton
          sx={{
            background:
              "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);",
            ":hover": {
              background: "none",
            },
          }}
          color="inherit"
        >
          <Instagram />
        </IconButton>
      </Box>
      {!isMobile && (
        <Box>
          <Divider />
          <List
            disablePadding
            dense
            sx={{
              color: "inherit",
              backgroundColor: theme.palette.secondary.main,
            }}
          >
            <ContactMethod
              Icon={Phone}
              primary="Llámenos"
              secondary="123 456 789"
              url="tel:123456789"
            />
            <ContactMethod
              Icon={Whatsapp}
              primary="WhatsApp"
              secondary="123 456 789"
              url="https://wa.me/15551234567"
            />

            <ContactMethod
              Icon={Email}
              primary="Email"
              secondary="elrincondeidiomas20@gmail.com"
              url="mailto:elrincondeidiomas20@gmail.com"
            />
          </List>
        </Box>
      )}
      {/* {!isMobile && <LocationMap />} */}
    </Box>
  )
}

const stp = s => ({
  isMobile: s.isMobile,
})

export default connect(stp)(NavMenu)

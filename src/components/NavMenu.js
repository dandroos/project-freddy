import {
  Box,
  Button,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material"
import { Email, Phone, Whatsapp } from "mdi-material-ui"
import { Link, graphql, navigate, useStaticQuery } from "gatsby"
import { setBookingForm, setMobileMenu } from "../redux/actions"

import React from "react"
import SocialBar from "./SocialBar"
import { StaticImage } from "gatsby-plugin-image"
import { connect } from "react-redux"
import { nav } from "../sitemap"

const NavMenu = ({ dispatch, isMobile }) => {
  const theme = useTheme()

  const { email_address, phone_number } = useStaticQuery(graphql`
    {
      file(
        extension: { eq: "md" }
        sourceInstanceName: { eq: "contact" }
        name: { eq: "phone_and_email" }
      ) {
        id
        childMarkdownRemark {
          frontmatter {
            email_address
            phone_number
          }
        }
      }
    }
  `).file.childMarkdownRemark.frontmatter

  const phoneNumber = `${phone_number.slice(0, 3)} ${phone_number.slice(
    3,
    6
  )} ${phone_number.slice(6, 9)}`
  const ContactMethod = ({ Icon, primary, secondary, url, phone }) => (
    <Grid item xs={12} md={!isMobile && phone ? 6 : undefined}>
      <Button
        fullWidth
        color="secondary"
        sx={{ display: "block", textAlign: "center" }}
        component="a"
        to={url}
      >
        <Icon sx={{ display: "block", m: "auto" }} />
        <Typography variant="subtitle1">{primary}</Typography>
        <Typography
          display="block"
          variant="overline"
          sx={{ lineHeight: 0.65, mb: 0.5 }}
          textTransform="lowercase"
        >
          {secondary}
        </Typography>
      </Button>
    </Grid>
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
        width="100%"
        textAlign="center"
        mb={1}
        mt={2}
        sx={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/")
          isMobile && dispatch(setMobileMenu(false))
        }}
      >
        <StaticImage
          src="../images/logo-white.png"
          alt="El Rincón de Idiomas logo"
          width={200}
          imgStyle={{ height: "100%" }}
          placeholder="none"
        />
      </Box>
      <List sx={{ width: "100%" }}>
        {nav.internal.map((i, ind) => {
          return (
            <ListItemButton
              key={ind}
              component={!i.special ? Link : undefined}
              {...(!i.special && {
                activeStyle: { fontWeight: "bold", letterSpacing: 2 },
              })}
              to={!i.special ? i.url : undefined}
              sx={{
                letterSpacing: 1,
                textAlign: "center",
                backgroundColor: i.special
                  ? theme.palette.secondary.main
                  : undefined,
                ":hover": {
                  backgroundColor: i.special
                    ? theme.palette.secondary.light
                    : undefined,
                },
              }}
              onClick={() => {
                if (i.special) {
                  dispatch(setBookingForm({ isOpen: true }))
                }
                if (isMobile) {
                  dispatch(setMobileMenu(false))
                }
              }}
            >
              <ListItemText
                primary={i.label}
                primaryTypographyProps={{
                  variant: "nav",
                  fontWeight: "inherit",
                  letterSpacing: "inherit",
                  sx: {
                    transition: "all .3s",
                  },
                }}
              />
            </ListItemButton>
          )
        })}
      </List>
      <SocialBar />
      {!isMobile && (
        <Box m={1}>
          <Grid container spacing={1}>
            <ContactMethod
              Icon={Phone}
              primary="Llámenos"
              secondary={phoneNumber}
              url={`tel:${phone_number}`}
              phone
            />
            <ContactMethod
              Icon={Whatsapp}
              primary="WhatsApp"
              secondary={phoneNumber}
              url={`https://wa.me/${phone_number}`}
              phone
            />

            <ContactMethod
              Icon={Email}
              primary="Email"
              secondary={email_address}
              url={`mailto:${email_address}`}
            />
          </Grid>
        </Box>
      )}
    </Box>
  )
}

const stp = s => ({
  isMobile: s.isMobile,
})

export default connect(stp)(NavMenu)

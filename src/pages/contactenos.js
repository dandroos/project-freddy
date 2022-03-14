import { Box, Button, Grid, Typography } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import { Email, Phone, Whatsapp } from "mdi-material-ui"
import React from "react"
import ContactButtons from "../components/ContactButtons"
import ContactForm from "../components/ContactForm"
import LocationAndSchedule from "../components/LocationAndSchedule"
import Page from "../components/Page"

const Contactenos = () => {
  const { title } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `).site.siteMetadata
  return (
    <Page title="Contáctenos">
      <Box>
        <LocationAndSchedule />
      </Box>
      <Box my={2}>
        <ContactButtons />
      </Box>
      {/* <Typography variant="h5">{title}</Typography>
      <Typography variant="h6">Horario</Typography>
      <Typography gutterBottom>Lunes a Jueves 16:00 - 19:00</Typography> */}
      <ContactForm />
    </Page>
  )
}

export default Contactenos

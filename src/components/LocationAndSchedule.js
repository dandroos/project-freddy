import { Box, Grid, Typography, useTheme } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { connect } from "react-redux"
import LocationMap from "./LocationMap"

const LocationAndSchedule = ({ isMobile, footer }) => {
  const { title } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `).site.siteMetadata
  const theme = useTheme()
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: footer
          ? theme.palette.secondary.main
          : theme.palette.primary.dark,
        color: footer
          ? theme.palette.secondary.contrastText
          : theme.palette.primary.contrastText,
        textAlign: "center",
      }}
    >
      <Grid item xs={12} md={6}>
        <LocationMap />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          py: isMobile ? 3 : 0,
        }}
      >
        <Box>
          <Typography variant="h5">{title}</Typography>
          <Typography>Calle Alcades Mayores 1 </Typography>
          <Typography>Local 6</Typography>
          <Typography>Majada Marcial</Typography>
          <Typography>Puerto del Rosario, 35600</Typography>
          <Typography gutterBottom>Fuerteventura</Typography>
        </Box>
        <Box>
          <Typography variant="h6">Horario</Typography>
          <Typography>Lunes a Jueves: 16:00 - 19:00</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

const stp = s => ({
  isMobile: s.isMobile,
})

export default connect(stp)(LocationAndSchedule)

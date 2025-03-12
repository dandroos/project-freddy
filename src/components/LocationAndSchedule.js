import { Box, Grid, Paper, Typography, useTheme } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"

import LocationMap from "./LocationMap"
import React from "react"
import { connect } from "react-redux"

const LocationAndSchedule = ({ isMobile, footer }) => {
  const { mob_title } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          mob_title
        }
      }
    }
  `).site.siteMetadata
  const theme = useTheme()
  return (
    <Paper elevation={10}>
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
            <Typography variant="h5">{mob_title}</Typography>
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
    </Paper>
  )
}

const stp = s => ({
  isMobile: s.isMobile,
})

export default connect(stp)(LocationAndSchedule)

import {
  Box,
  Container,
  Grid,
  Link,
  Paper,
  Typography,
  useTheme,
} from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { connect } from "react-redux"
import LocationAndSchedule from "./LocationAndSchedule"
import LocationMap from "./LocationMap"

const Footer = ({ isMobile }) => {
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
    <Paper
      square
      elevation={24}
      sx={{
        py: 3,
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
      }}
    >
      <Container>
        <LocationAndSchedule footer />
        {/* <Grid
          container
          alignItems="center"
          sx={{ backgroundColor: theme.palette.secondary.main }}
        >
          <Grid item xs={12} md={6}>
            <LocationMap />
          </Grid>
          <Grid item xs={12} md={6} sx={{ py: isMobile ? 3 : 0 }}>
            <Typography variant="h5">{title}</Typography>
            <Typography>Calle Alcades Mayores 1 </Typography>
            <Typography>Local 6</Typography>
            <Typography>Majada Marcial</Typography>
            <Typography>Puerto del Rosario, 35600</Typography>
            <Typography gutterBottom>Fuerteventura</Typography>
            <Typography variant="h6">Horario</Typography>
            <Typography>Lunes a Jueves: 16:00 - 19:00</Typography>
          </Grid>
        </Grid> */}
        <Box p={1}>
          <Typography variant="caption" display="block">
            All content &copy;{" "}
            {(() => {
              const currentYear = new Date().getFullYear()
              return currentYear === 2022 ? `2022 ` : `2022 - ${currentYear} `
            })()}
            {title}
          </Typography>
          <Typography variant="caption">
            Sitio web:{" "}
            <Link
              href="mailto:dandrewsuk82@gmail.com"
              color="common.white"
              underline="hover"
            >
              David Andrews
            </Link>
          </Typography>
        </Box>
      </Container>
    </Paper>
  )
}
const stp = s => ({
  isMobile: s.isMobile,
})

export default connect(stp)(Footer)

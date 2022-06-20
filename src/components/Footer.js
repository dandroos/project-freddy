import {
  Box,
  Container,
  Link,
  Paper,
  Typography,
  useTheme,
} from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"

import LocationAndSchedule from "./LocationAndSchedule"
import React from "react"
import { connect } from "react-redux"

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
        <Box mt={2}>
          <Typography variant="caption" display="block">
            Todo el contenido del sitio &copy;{" "}
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

import { Box, Button, Container, Grid, Typography } from "@mui/material"
import { BookOpen, FrequentlyAskedQuestions } from "mdi-material-ui"
import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { connect } from "react-redux"

const Index = ({ isMobile }) => {
  const { description } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
        }
      }
    }
  `).site.siteMetadata
  return (
    <Container maxWidth="sm">
      <Box display="flex" justifyContent="center" sx={{ mb: 2 }}>
        {isMobile ? (
          <StaticImage
            src="../images/logo.png"
            width={180}
            style={{ marginBottom: "15px" }}
          />
        ) : (
          <StaticImage
            src="../images/logo.png"
            width={380}
            style={{ marginBottom: "15px" }}
          />
        )}
      </Box>
      <Typography variant="lead" paragraph>
        {description}
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Button
            fullWidth
            href="https://www.gatsbyjs.com/docs/"
            target="_blank"
            variant="contained"
            endIcon={<BookOpen />}
          >
            Read the docs
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            fullWidth
            component={Link}
            to="/whats-included"
            variant="contained"
            endIcon={<FrequentlyAskedQuestions />}
          >
            What's included?
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

const stp = s => ({
  isMobile: s.isMobile,
})

export default connect(stp)(Index)

import { Button, Container, Grid, Typography } from "@mui/material"
import { BookOpen, FrequentlyAskedQuestions } from "mdi-material-ui"
import React from "react"
import { Link } from "gatsby"

const Index = () => {
  return (
    <Container maxWidth="sm">
      <Typography paragraph>
        Gatsby is the fast and flexible framework that makes building websites
        with any CMS, API, or database fun again. Build and deploy headless
        websites that drive more traffic, convert better, and earn more revenue!
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

export default Index

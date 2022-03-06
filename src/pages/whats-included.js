import { Button, Container, Typography } from "@mui/material"
import React from "react"
import { Link } from "gatsby"
import { ChevronLeft } from "mdi-material-ui"

const WhatsIncluded = () => {
  const Feature = ({ title, children }) => (
    <>
      <Typography variant="h3" variantMapping={{ h3: "h2" }} gutterBottom>
        {title}
      </Typography>
      <Typography paragraph>{children}</Typography>
    </>
  )

  return (
    <Container maxWidth="sm">
      <Button component={Link} to="/" startIcon={<ChevronLeft />}>
        Back
      </Button>
      <Feature title="MUI (Material-UI)">
        MUI provides a robust, customizable, and accessible library of
        foundational and advanced components, enabling you to build your design
        system and develop React applications faster.
      </Feature>
      <Feature title="Framer Motion">
        An open source production-ready motion library for React.
      </Feature>
      <Feature title="Redux">
        Redux is an open-source JavaScript library for managing and centralizing
        application state.
      </Feature>
      <Feature title="Font Face Observer">
        Font Face Observer is a fast and simple web font loader. You can use it
        to load fonts and customise your browser’s font loading behaviour.
      </Feature>
    </Container>
  )
}

export default WhatsIncluded

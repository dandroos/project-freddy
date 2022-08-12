import * as React from "react"

import { Container, Typography } from "@mui/material"

import HeadComponent from "../components/Head"

const NotFoundPage = () => (
  <Container>
    <Typography variant="h1" variantMapping={{ h1: "h2" }}>
      ¡Ups!
    </Typography>
    <Typography>{`No hay una página aquí. :(`}</Typography>
  </Container>
)

export default NotFoundPage

export const Head = () => <HeadComponent title="404: ¡Ups!" />

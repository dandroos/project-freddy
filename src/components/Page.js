import { Container, Typography } from "@mui/material"
import React from "react"
import Seo from "./seo"

const Page = ({ children, title }) => {
  return (
    <>
      <Seo title={title} />
      <Container>
        <Typography variant="h2" gutterBottom>
          {title}
        </Typography>
        {children}
      </Container>
    </>
  )
}

export default Page

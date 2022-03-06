import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Typography } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
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
    <>
      <StaticImage
        src="../images/gatsby-icon.png"
        alt="Gatsby logo"
        width={150}
        height={150}
        layout="fixed"
        style={{ margin: "auto" }}
      />
      <Typography variant="h1" align="center">
        {title}
      </Typography>
    </>
  )
}

export default Header

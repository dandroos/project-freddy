import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Typography } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import { connect } from "react-redux"

const Header = ({ isMobile }) => {
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
      <Typography variant="caption" display="block" align="center">
        Showing mobile layout: <strong>{isMobile.toString()}</strong>
      </Typography>
    </>
  )
}

const mapStateToProps = state => ({
  isMobile: state.isMobile,
})

export default connect(mapStateToProps)(Header)

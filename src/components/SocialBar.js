import { Box, IconButton } from "@mui/material"
import { Facebook, Instagram, Twitter } from "mdi-material-ui"
import { graphql, useStaticQuery } from "gatsby"

import React from "react"
import { connect } from "react-redux"

const SocialBar = ({ isMobile }) => {
  const { facebook, instagram, twitter } = useStaticQuery(graphql`
    {
      file(
        extension: { eq: "md" }
        sourceInstanceName: { eq: "contact" }
        name: { eq: "social_media" }
      ) {
        id
        childMarkdownRemark {
          frontmatter {
            facebook
            instagram
            twitter
          }
        }
      }
    }
  `).file.childMarkdownRemark.frontmatter

  return (
    <Box
      mt={isMobile ? 1 : undefined}
      mb={1}
      display="flex"
      justifyContent="center"
    >
      <IconButton
        href={`https://facebook.com/${facebook}`}
        target="_blank"
        sx={{ backgroundColor: "#4267B2", mr: 2 }}
        color="inherit"
      >
        <Facebook />
      </IconButton>
      <IconButton
        href={`https://instagram.com/${instagram}`}
        target="_blank"
        sx={{
          background:
            "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);",
          ":hover": {
            background: "none",
          },
          mr: 2,
        }}
        color="inherit"
      >
        <Instagram />
      </IconButton>
      <IconButton
        href={`https://twitter.com/${twitter}`}
        target="_blank"
        sx={{
          backgroundColor: `#1DA1F2`,
          ":hover": {
            background: "none",
          },
        }}
        color="inherit"
      >
        <Twitter />
      </IconButton>
    </Box>
  )
}

const stp = s => ({
  isMobile: s.isMobile,
})

export default connect(stp)(SocialBar)

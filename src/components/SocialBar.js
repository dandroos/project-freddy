import { Box, IconButton } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import { Facebook, Instagram } from "mdi-material-ui"
import React from "react"

const SocialBar = () => {
  const { facebook, instagram } = useStaticQuery(graphql`
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
          }
        }
      }
    }
  `).file.childMarkdownRemark.frontmatter

  return (
    <Box mb={1} display="flex" justifyContent="center">
      <IconButton
        href={`https://facebook.com/${facebook}`}
        target="_blank"
        sx={{ backgroundColor: "#4267B2", mr: 1 }}
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
        }}
        color="inherit"
      >
        <Instagram />
      </IconButton>
    </Box>
  )
}

export default SocialBar

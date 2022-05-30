import { Box } from "@mui/material"
import ContactButtons from "../components/ContactButtons"
import ContactForm from "../components/ContactForm"
import LocationAndSchedule from "../components/LocationAndSchedule"
import Page from "../components/Page"
import React from "react"
import Seo from "../components/seo"
import { connect } from "react-redux"
import { graphql } from "gatsby"

const Contactenos = ({ data, siteReady }) => {
  return (
    <>
      <Seo title="Contáctenos" />
      <form
        name="contact"
        action="#"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        // onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
      </form>
      {siteReady && (
        <Page
          title="Contáctenos"
          noCTA
          image={data.headerImage.childMarkdownRemark.frontmatter.contactenos}
        >
          <Box>
            <ContactButtons />
          </Box>
          <Box my={2}>
            <ContactForm />
          </Box>
          <LocationAndSchedule />
        </Page>
      )}
    </>
  )
}

const stp = s => ({
  siteReady: s.siteReady,
})

export default connect(stp)(Contactenos)

export const query = graphql`
  query ($light: String!, $dark: String!) {
    headerImage: file(
      sourceInstanceName: { eq: "content" }
      name: { eq: "images" }
    ) {
      childMarkdownRemark {
        frontmatter {
          contactenos {
            childImageSharp {
              gatsbyImageData(
                aspectRatio: 1.5
                placeholder: BLURRED
                quality: 90
                transformOptions: {
                  duotone: { highlight: $light, shadow: $dark }
                }
              )
            }
          }
        }
      }
    }
  }
`

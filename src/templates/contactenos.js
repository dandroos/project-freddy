import { Box } from "@mui/material"
import ContactButtons from "../components/ContactButtons"
import ContactForm from "../components/ContactForm"
import HeadComponent from "../components/Head"
import LocationAndSchedule from "../components/LocationAndSchedule"
import Page from "../components/Page"
import React from "react"
import { graphql } from "gatsby"

const Contactenos = ({ data }) => {
  return (
    <>
      <form
        name="contact"
        action="#"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="name" />
        <input type="hidden" name="email" />
        <input type="hidden" name="tel" />
        <input type="hidden" name="message" />
      </form>
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
    </>
  )
}

export default Contactenos

export const Head = () => <HeadComponent title="Contáctenos" />

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

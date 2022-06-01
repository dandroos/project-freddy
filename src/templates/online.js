import HtmlParser from "../components/HtmlParser"
import Page from "../components/Page"
import React from "react"
import Seo from "../components/seo"
import { connect } from "react-redux"
import { graphql } from "gatsby"

const Online = ({ data, siteReady }) => {
  return (
    <>
      <Seo title="Online" />
      {siteReady && (
        <Page
          title="Online"
          image={data.headerImage.childMarkdownRemark.frontmatter.online}
        >
          <HtmlParser input={data.body.childMarkdownRemark.html} />
        </Page>
      )}
    </>
  )
}

const stp = s => ({
  siteReady: s.siteReady,
})

export default connect(stp)(Online)

export const query = graphql`
  query ($light: String!, $dark: String!) {
    headerImage: file(
      sourceInstanceName: { eq: "content" }
      name: { eq: "images" }
    ) {
      childMarkdownRemark {
        frontmatter {
          online {
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
    body: file(sourceInstanceName: { eq: "content" }, name: { eq: "online" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`

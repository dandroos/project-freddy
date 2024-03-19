import HeadComponent from "../components/Head"
import HtmlParser from "../components/HtmlParser"
import Page from "../components/Page"
import React from "react"
import { graphql } from "gatsby"

const Oxford = ({ data }) => {
  return (
    <Page
      title="Oxford Test of English"
      image={data.headerImage.childMarkdownRemark.frontmatter.oxford}
    >
      <HtmlParser input={data.body.childMarkdownRemark.html} />
    </Page>
  )
}

export default Oxford

export const Head = () => <HeadComponent title="Oxford Test of English" />

export const query = graphql`
  query ($light: String!, $dark: String!) {
    headerImage: file(
      sourceInstanceName: { eq: "content" }
      name: { eq: "images" }
    ) {
      childMarkdownRemark {
        frontmatter {
          oxford {
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
    body: file(
      sourceInstanceName: { eq: "content" }
      name: { eq: "oxford_test_of_english" }
    ) {
      childMarkdownRemark {
        html
      }
    }
  }
`

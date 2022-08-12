import HeadComponent from "../components/Head"
import HtmlParser from "../components/HtmlParser"
import Page from "../components/Page"
import React from "react"
import { graphql } from "gatsby"

const Conocenos = ({ data }) => {
  return (
    <Page
      title="Conócenos"
      image={data.headerImage.childMarkdownRemark.frontmatter.conocenos}
    >
      <HtmlParser input={data.body.childMarkdownRemark.html} />
    </Page>
  )
}

export default Conocenos

export const Head = () => <HeadComponent title="Conócenos" />

export const query = graphql`
  query ($light: String!, $dark: String!) {
    body: file(
      extension: { eq: "md" }
      name: { eq: "conocenos" }
      sourceInstanceName: { eq: "content" }
    ) {
      childMarkdownRemark {
        html
      }
    }
    headerImage: file(
      sourceInstanceName: { eq: "content" }
      name: { eq: "images" }
    ) {
      childMarkdownRemark {
        frontmatter {
          conocenos {
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

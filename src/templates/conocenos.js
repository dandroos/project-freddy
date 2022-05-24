import React, { useEffect } from "react"

import Page from "../components/Page"
import ReactMarkdown from "react-markdown"
import { Typography } from "@mui/material"
import { connect } from "react-redux"
import { graphql } from "gatsby"
import { setPageTitle } from "../redux/actions"

const Conocenos = ({ data, dispatch, siteReady }) => {
  const { primary_text, secondary_text } =
    data.text.childMarkdownRemark.frontmatter

  useEffect(() => {
    dispatch(setPageTitle("Conócenos"))
    //eslint-disable-next-line
  }, [])
  return (
    siteReady && (
      <Page
        title="Conócenos"
        image={data.headerImage.childMarkdownRemark.frontmatter.conocenos}
      >
        <ReactMarkdown
          includeElementIndex
          children={primary_text}
          components={{
            p: ({ node, index }) => {
              return (
                <Typography variant="lead" paragraph>
                  {node.children.map(i => {
                    if (i.tagName === "strong") {
                      return <strong key={index}>{i.children[0].value}</strong>
                    }
                    if (i.tagName === "em") {
                      return <em key={index}>{i.children[0].value}</em>
                    } else if (!i.tagName) {
                      return i.value
                    }
                    return null
                  })}
                </Typography>
              )
            },
          }}
        />
        {/* <GatsbyImage
        image={getImage(
          isMobile
            ? data.mobImage.childMarkdownRemark.frontmatter.about_image
            : data.image.childMarkdownRemark.frontmatter.about_image
        )}
        style={{ marginBottom: 15 }}
        quality={99}
      /> */}
        <ReactMarkdown
          includeElementIndex
          children={secondary_text}
          components={{
            p: ({ node, index, siblingCount }) => {
              return (
                <Typography paragraph={index + 1 !== siblingCount}>
                  {node.children.map((i, jInd) => {
                    if (i.tagName === "strong") {
                      return <strong key={index}>{i.children[0].value}</strong>
                    }
                    if (i.tagName === "em") {
                      return <em key={index}>{i.children[0].value}</em>
                    } else if (!i.tagName) {
                      return (
                        <React.Fragment key={index}>{i.value}</React.Fragment>
                      )
                    }
                    return null
                  })}
                </Typography>
              )
            },
          }}
        />
      </Page>
    )
  )
}

const stp = s => ({
  siteReady: s.siteReady,
  isMobile: s.isMobile,
})

export default connect(stp)(Conocenos)

export const query = graphql`
  query ($light: String!, $dark: String!) {
    text: file(
      extension: { eq: "md" }
      name: { eq: "about" }
      sourceInstanceName: { eq: "content" }
    ) {
      childMarkdownRemark {
        frontmatter {
          primary_text
          secondary_text
        }
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

import { Card, CardContent, Grid, Typography } from "@mui/material"

import Page from "../components/Page"
import React from "react"
import { connect } from "react-redux"
import { graphql } from "gatsby"

const Faq = ({ data, siteReady }) => {
  return (
    siteReady && (
      <Page
        title="FAQ"
        image={data.headerImage.childMarkdownRemark.frontmatter.faq}
      >
        <Grid container spacing={2}>
          {data.faqs.childMarkdownRemark.frontmatter.faqs.map(
            ({ faq }, ind) => {
              return (
                <Grid item xs={12} key={ind}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="h5">{faq.question}</Typography>
                      <Typography>{faq.answer}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )
            }
          )}
        </Grid>
      </Page>
    )
  )
}

const stp = s => ({
  siteReady: s.siteReady,
})

export default connect(stp)(Faq)

export const query = graphql`
  query ($light: String!, $dark: String!) {
    headerImage: file(
      sourceInstanceName: { eq: "content" }
      name: { eq: "images" }
    ) {
      childMarkdownRemark {
        frontmatter {
          faq {
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
    faqs: file(sourceInstanceName: { eq: "content" }, name: { eq: "faqs" }) {
      childMarkdownRemark {
        frontmatter {
          faqs {
            faq {
              question
              answer
            }
          }
        }
      }
    }
  }
`
